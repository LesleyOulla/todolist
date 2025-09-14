from django.db import models

class Task(models.Model):
    STATUS_CHOICES = [
        ("todo", "À faire"),
        ("in_progress", "En cours"),
        ("done", "Fait"),
    ]

    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="todo")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} - {self.get_status_display()}"