<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if (!isset($_GET['ruc']) || empty($_GET['ruc'])) {
    echo json_encode(['error' => 'RUC requerido']);
    exit;
}

$ruc = $_GET['ruc'];

// Validar RUC
if (!preg_match('/^\d{11}$/', $ruc)) {
    echo json_encode(['error' => 'RUC debe tener 11 dígitos']);
    exit;
}

// Ejecutar tu script bash
$output = shell_exec("/solicitudes/consultar_ruc.sh " . escapeshellarg($ruc) . " 2>&1");

if ($output === null) {
    echo json_encode(['error' => 'Error ejecutando consulta']);
    exit;
}

// El script ya devuelve JSON formateado, solo lo pasamos
echo $output;
?>