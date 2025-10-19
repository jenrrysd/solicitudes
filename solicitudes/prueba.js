        <script>
            document.addEventListener("DOMContentLoaded", () => {
                // Referencias a los elementos del formulario
                const tipoPersona = document.getElementById("ddlTipoPersona");
                const divPersonaJuridica = document.getElementById("divPersonaJuridica");
                const divPersonaNatural = document.getElementById("divPersonaNatural");
                const btnBuscarRUC = document.getElementById("btnBuscarRUC");
                const btnBuscarDNI = document.getElementById("btnBuscarDNI");
                const razonSocial = document.getElementById("txtRazonSocial");
                
                // Configurar razón social como solo lectura
                razonSocial.readOnly = true;
                razonSocial.style.backgroundColor = "#f3f3f3";
                razonSocial.style.cursor = "not-allowed";
                razonSocial.style.color = "#333";

                // Buscar RUC con Node.js backend
                btnBuscarRUC.addEventListener("click", async () => {
                    const ruc = document.getElementById("txtNumDoc").value.trim();

                    if (!ruc.match(/^\d{11}$/)) {
                        alert("Ingrese un RUC válido de 11 dígitos");
                        return;
                    }

                    btnBuscarRUC.disabled = true;
                    btnBuscarRUC.innerText = "Buscando...";

                    try {
                        const res = await fetch(`http://localhost:3000/api/ruc/${ruc}`);
                        const data = await res.json();

                        if (data && data.razon_social) {
                            razonSocial.value = data.razon_social;
                        } else if (data.error) {
                            alert("Error: " + data.error);
                        } else {
                            alert("No se encontró el RUC");
                        }
                    } catch (err) {
                        console.error(err);
                        alert("Error al consultar el RUC");
                    } finally {
                        btnBuscarRUC.disabled = false;
                        btnBuscarRUC.innerText = "Buscar RUC";
                    }
                });

                // Buscar DNI con Node.js backend
                btnBuscarDNI.addEventListener("click", async () => {
                    const dni = document.getElementById("txtNumDoc").value.trim();
                    const txtApePat = document.getElementById("txtApePat");
                    const txtApeMat = document.getElementById("txtApeMat");
                    const txtNombre = document.getElementById("txtNombre");

                    if (!dni.match(/^\d{8}$/)) {
                        alert("Ingrese un DNI válido de 8 dígitos");
                        return;
                    }

                    btnBuscarDNI.disabled = true;
                    btnBuscarDNI.innerText = "Buscando...";

                    try {
                        const res = await fetch(`http://localhost:3000/api/dni/${dni}`);
                        const data = await res.json();

                        console.log("Datos recibidos:", data); // Para debug

                        if (data && data.first_name && data.first_last_name && data.second_last_name) {
                            // Llenar los campos con los datos
                            txtApePat.value = data.first_last_name.toUpperCase();
                            txtApeMat.value = data.second_last_name.toUpperCase();
                            txtNombre.value = data.first_name.toUpperCase();

                            // Hacer los campos de solo lectura
                            txtApePat.readOnly = true;
                            txtApeMat.readOnly = true;
                            txtNombre.readOnly = true;

                            // Aplicar estilos
                            txtApePat.style.backgroundColor = "#f3f3f3";
                            txtApeMat.style.backgroundColor = "#f3f3f3";
                            txtNombre.style.backgroundColor = "#f3f3f3";
                            
                            txtApePat.style.cursor = "not-allowed";
                            txtApeMat.style.cursor = "not-allowed";
                            txtNombre.style.cursor = "not-allowed";
                            
                            txtApePat.style.color = "#333";
                            txtApeMat.style.color = "#333";
                            txtNombre.style.color = "#333";

                            alert("Datos encontrados y cargados correctamente");
                        } else if (data.error) {
                            alert("Error: " + data.error);
                        } else {
                            alert("No se encontró el DNI");
                        }
                    } catch (err) {
                        console.error(err);
                        alert("Error al consultar el DNI");
                    } finally {
                        btnBuscarDNI.disabled = false;
                        btnBuscarDNI.innerText = "Buscar DNI";
                    }
                });
            });
        </script>
    <script src="script.js"></script>