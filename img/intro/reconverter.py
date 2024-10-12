from PIL import Image

img = Image.open('contact.jpg')
img.save('contact.webp', 'webp')