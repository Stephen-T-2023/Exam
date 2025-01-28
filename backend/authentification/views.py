from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import *
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status

class HomeView(APIView):
    
    permission_classes = (IsAuthenticated, )
    def get(self, request):
        return

class LogoutView(APIView):
    permission_classes = (IsAuthenticated, )
    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class UserRegistrationAPIView(GenericAPIView):
    permission_classes = (AllowAny,)
    serializer_class = UserRegistrationSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = RefreshToken.for_user(user)
        data = serializer.data
        data["tokens"] = {"refresh":str(token), "access": str(token.access_token)}
        return Response(data, status= status.HTTP_201_CREATED)

class TicketBookingView(APIView):
    permission_classes = (IsAuthenticated, )
    serializer_class = TicketBookingSerializer

    def get(self, request):
        user = request.user.id
        ticket_id = [{"User_id": ticket_id.User_id, "Ticket_id": ticket_id.Ticket_id, "Ticket_type": ticket_id.Ticket_type} for ticket_id in TicketBooking.objects.filter(User_id=user)]
        return Response(ticket_id)

    def post(self, request):
        serializer = TicketBookingSerializer(data=request.data)
        if serializer.is_valid(raise_exception = True):
            serializer.save()
            return Response(serializer.data)

class HotelBookingView(APIView):
    permission_classes = (IsAuthenticated, )
    serializer_class = HotelBookingSerializer

    def get(self, request):
        user = request.user.id
        hotel_id = [{"User_id": hotel_id.User_id, "Reservation_id": hotel_id.Reservation_id, "Room_type": hotel_id.Room_type, "Start_Date": hotel_id.Start_Date, "End_Date": hotel_id.End_Date} for hotel_id in HotelBooking.objects.filter(User_id=user)]
        return Response(hotel_id)

    def post(self, request):
        serializer = HotelBookingSerializer(data=request.data)
        if serializer.is_valid(raise_exception = True):
            serializer.save()
            return Response(serializer.data)