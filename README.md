## Configuración
1. instalar dependencias:

   ```bash
   npm install

2. Ejecutar las migraciones y inicia el servidor con un solo comando:
   ```bash
   
    para la bd 
   npx prisma generate #1
   npx prisma migrate dev  #2
   npx prisma db push  #3 en caso de cambios
   npm start  #Correrlo
