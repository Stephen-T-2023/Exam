from django.db import models
import uuid
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    USERNAME_FIELD="email"
    REQUIRED_FIELDS=["username"]

    def __str__(self) -> str:
        return self.email

class TicketBooking(models.Model):
    User_id = models.CharField(max_length=1000)
    Ticket_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    Ticket_type = models.CharField(max_length=20)

class HotelBooking(models.Model):
    User_id = models.CharField(max_length=1000)
    Reservation_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    Room_type = models.CharField(max_length=20)
    Start_Date = models.DateField(auto_now=False)
    End_Date = models.DateField(auto_now=False)