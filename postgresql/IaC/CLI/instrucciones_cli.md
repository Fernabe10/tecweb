# Postgresql. Instrucciones útiles CLI Azure

GitHub Codespace.

Gestionar instalación de CLI Azure en Codespace:

```bash
# Comprobar si CLI Azure está instalada
az version

# Comprobar SO
cat /etc/os-release

# Instalar CLI Azure
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
```

Az Login
```bash
az login
```

Crear grupo de recursos:
```bash
az group create \
  --name postgresqltecweb \
  --location canadacentral
```

Crear Postgresql
```bash
az postgres flexible-server create \
  --resource-group postgreqltecweb \
  --name tecweb \
  --location canadacentral \
  --version 18 \
  --tier Burstable \
  --sku-name Standard_B1ms \
  --authentication-method password \
  --admin-user admin \
  --admin-password "TuPasswordSegura123!" \
  --public-access 0.0.0.0
```

Administración Azure Postgreql

```bash
# Para permitir el acceso desde cualquier servicio Azure, agrega una regla de firewall desde 0.0.0.0:
az postgres flexible-server firewall-rule create \
  --resource-group postgreqltecweb \
  --name tecweb \
  --rule-name AllowAzureServices \
  --start-ip-address 0.0.0.0 \
  --end-ip-address 0.0.0.0

# Comprobar el servidor creado
az postgres flexible-server show \
  --resource-group postgreqltecweb \
  --name tecweb

# Obtener la cadena de conexión
az postgres flexible-server show-connection-string \
  --server-name tecweb \
  --admin-user admin \
  --admin-password "TuPasswordSegura123!"

```