/*const mostrarListado = (contactos) => {
    const contenedorContactos = document.getElementById("contenedor-listado");
    contenedorContactos.innerHTML = ""; // Limpiar los productos actuales
    
    contactos.forEach((elm) => {
        const div = document.createElement("div");
        div.classList.add("contactos");
        
        div.innerHTML = `
            <ul id="lista">
                <li><p>${elm.nombre}</p></li>
                <li><p>${elm.numero}</p></li>
                <button class="btn">Enviar mensaje</button>
            </ul>
           
        `;
        contenedorContactos.appendChild(div);

        div.getElementsByClassName("btn")[0].addEventListener("click", () =>{
            
            
        });
    });
    
}

const cargarListado = async () => {
    try {
        const response = await fetch('./excelajson.json');
        const data = await response.json();
        mostrarListado(data);
    } catch (error) {
        console.error('Error al cargar los productos:', error);
    } finally {
        console.log('Finalización de la carga de productos');
    }
};

cargarListado()*/

const mostrarListado = (contactos) => {
    const contenedorContactos = document.getElementById("contenedor-listado");
    contenedorContactos.innerHTML = ""; // Limpiar los productos actuales

    // Crear una tabla y agregarla al contenedor
    const table = document.createElement("table");
    table.classList.add("contactos-table");

    // Crear encabezado de la tabla
    const header = document.createElement("thead");
    header.innerHTML = `
        <tr>
            <th>Nombre</th>
            <th>Número</th>
            <th>Accion</th>
            <th>Confirmacion</th>
            
        </tr>
    `;
    table.appendChild(header);

    // Crear cuerpo de la tabla
    const body = document.createElement("tbody");

    contactos.forEach((elm) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${elm.nombre}</td>
            <td>${elm.numero}</td>
            <td><button class="btn">Enviar mensaje</button></td>
            <td><input type="checkbox" class="checkbox"></td>
        `;

        // Agregar evento al botón en cada fila
        row.querySelector(".btn").addEventListener("click", () => {
            const mensaje = encodeURIComponent(
                "Inauguración del Sistema de Iluminación integral y Sonido del Campanario de la Iglesia Catedral de La Plata.\n\n" + 
                `Estimado/a ${elm.nombre} ,\n\n` +
                "El Colegio de la Abogacía de La Plata hace extensiva la invitación a la inauguración del nuevo sistema de iluminación integral y sonido del campanario de la Iglesia Catedral de nuestra ciudad, un evento destacado que realza el valor patrimonial de este emblemático espacio.\n\n" +
                "Participará del tan significativo acontecimiento la Sinfonía Antártica, dirigida por el  Maestro Nicolás Sorín, ofreciendo un concierto al aire libre.\n\n" +
                "Detalles del evento:\n" +
                "📅 Fecha: 15 de noviembre de 2024\n" +
                "🕖 Hora: 19:00\n" +
                "📍 Lugar: Plaza Moreno\n" +
                "Importante \n" +
                "Podes retirar tus pulseras para el sector de profesionales los días Martes, Miércoles y jueves en el horario de 8.30 a 16 hs. en informes del colegio de abogados PB. Para vos y tu familia \n\n"+
                "¡Por favor, confirmar asistencia por este medio!")
            
            const url = `whatsapp://send?phone=${elm.numero}&text=${mensaje}`;
            const checkbox = row.querySelector(".checkbox");
            checkbox.checked = true;
            setTimeout(() => {
                window.location.href = url;
            }, 100); // 100 ms de retraso // Abrir WhatsApp con el enlace
        });
        row.querySelector(".btn").addEventListener("click", () => {
            const mensaje = encodeURIComponent(
                "Inauguración del Sistema de Iluminación integral y Sonido del Campanario de la Iglesia Catedral de La Plata.\n\n" + 
                `Estimado/a ${elm.nombre} ,\n\n` +
                "El Colegio de la Abogacía de La Plata hace extensiva la invitación a la inauguración del nuevo sistema de iluminación integral y sonido del campanario de la Iglesia Catedral de nuestra ciudad, un evento destacado que realza el valor patrimonial de este emblemático espacio.\n\n" +
                "Participará del tan significativo acontecimiento la Sinfonía Antártica, dirigida por el  Maestro Nicolás Sorín, ofreciendo un concierto al aire libre.\n\n" +
                "Detalles del evento:\n" +
                "📅 Fecha: 15 de noviembre de 2024\n" +
                "🕖 Hora: 19:00\n" +
                "📍 Lugar: Plaza Moreno\n" +
                "Importante \n" +
                "Podes retirar tus pulseras para el sector de profesionales los días Martes, Miércoles y jueves en el horario de 8.30 a 16 hs. en informes del colegio de abogados PB. Para vos y tu familia \n\n"+
                "¡Por favor, confirmar asistencia por este medio!")
            
            const url = `https://wa.me/${elm.numero}?text=${mensaje}`;
            const checkbox = row.querySelector(".checkbox");
            checkbox.checked = true;
            setTimeout(() => {
                window.open(url, '_blank');
            }, 100); // 100 ms de retraso // Abrir WhatsApp con el enlace
        });

        body.appendChild(row);
    });

    table.appendChild(body);
    contenedorContactos.appendChild(table);
}

const cargarListado = async () => {
    try {
        const response = await fetch('./excelajson.json');
        const data = await response.json();
        mostrarListado(data);
    } catch (error) {
        console.error('Error al cargar los productos:', error);
    } finally {
        console.log('Finalización de la carga de productos');
    }
};

cargarListado();
