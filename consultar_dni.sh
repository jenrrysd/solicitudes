#!/bin/bash

TOKEN="sk_10921.ytFcmj7MvF6ZVKoEKmL9P2aAixNO8fRV"

if [ -z "$1" ]; then
    echo "Uso: $0 <DNI>"
    echo "Ejemplo: $0 12345678"
    exit 1
fi

DNI=$1

# Validar que el DNI tenga 8 dígitos
if [[ ! $DNI =~ ^[0-9]{8}$ ]]; then
    echo "Error: El DNI debe tener 8 dígitos"
    exit 1
fi

echo "Consultando DNI: $DNI"
echo "========================="

curl -s -H 'Accept: application/json' -H "Authorization: Bearer $TOKEN" "https://api.decolecta.com/v1/reniec/dni?numero=$DNI" | jq .

