#!/bin/bash

TOKEN="sk_10921.ytFcmj7MvF6ZVKoEKmL9P2aAixNO8fRV"

if [ -z "$1" ]; then
    echo "Uso: $0 <RUC>"
    exit 1
fi

RUC=$1

echo "Consultando RUC: $RUC"
echo "========================="

curl -s -H 'Accept: application/json' -H "Authorization: Bearer $TOKEN" "https://api.decolecta.com/v1/sunat/ruc?numero=$RUC" | jq .

