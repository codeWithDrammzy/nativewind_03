# eventApp/models.py
from django.db import models
import qrcode
from io import BytesIO
from django.core.files.base import ContentFile
# from PIL import Image # This import is not needed for the new approach

class Event(models.Model):
    name = models.CharField(max_length=250)
    description = models.TextField(max_length=250)
    qr_code = models.ImageField(blank=True, null=True, upload_to='qrcodes/')
    date = models.DateField()

    def __str__(self):
        return str(self.name)

    def save(self, *args, **kwargs):
        # Only generate a QR code if the field is empty and the event has a name
        if not self.qr_code and self.name:
            # Create a QRCode instance
            qr = qrcode.QRCode(
                version=1,
                error_correction=qrcode.constants.ERROR_CORRECT_L,
                box_size=10,
                border=4,
            )
            
            # Add data to the QR code
            qr.add_data(self.name)
            qr.make(fit=True)

            # Create an image from the QR code instance
            img = qr.make_image(fill_color="black", back_color="white")
            
            # Save the image to a temporary in-memory file
            buffer = BytesIO()
            img.save(buffer, format='PNG')
            
            # Construct the filename and save the file to the model field
            fname = f'qr_code-{self.name}.png'
            self.qr_code.save(fname, ContentFile(buffer.getvalue()), save=False)

        super().save(*args, **kwargs)