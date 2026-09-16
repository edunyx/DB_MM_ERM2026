/* =====================================================================
   DATOS DE LAS MESAS
   ---------------------------------------------------------------------
   Cada integrante: cargo, apellidosNombres, celular, dni,
                    direccion, coords { lat, lng }, estado
   ---------------------------------------------------------------------
   Reglas:
   - Si celular o dni están vacíos → se muestra "in process"
   - Estado "success" se asigna por integrante según el requerimiento
   - El botón "View map" abre Google Maps en las coordenadas
   ===================================================================== */

const MESAS = [
  // ===============================================================
  // MESA 061396
  // ===============================================================
  {
    id: '061396',
    titulo: 'Mesa 061396',
    integrantes: [
      {
        cargo: 'PRESIDENTE',
        apellidosNombres: 'PILAR MORALES CARRANZA',
        celular: '942088960',
        dni: '76566756',
        direccion: 'CALLE 4 CP NOCHETO MZ. B LOTE 3',
        coords: { lat: -12.044805, lng: -76.985083 },
        estado: ''
      },
      {
        cargo: 'SECRETARIO',
        apellidosNombres: 'ANA MARIA MEZA LEON',
        celular: '',
        dni: '40543952',
        direccion: 'AV. MANUEL DE LA TORRE 499 URB. LOS FICUS',
        coords: { lat: -12.051639, lng: -76.970139 },
        estado: 'success'
      },
      {
        cargo: 'TERCER MIEMBRO',
        apellidosNombres: 'JOSE GILMER MIGUEL AGUILAR',
        celular: '994615929',
        dni: '17930902',
        direccion: 'JR. LOS ZORZALES 114',
        coords: { lat: -12.053222, lng: -76.962917 },
        estado: 'success'
      },
      {
        cargo: 'PRIMER SUPLENTE',
        apellidosNombres: 'ELIZABETH MOISES ORE DE CORILLA',
        celular: '',
        dni: '41007813',
        direccion: 'AAHH SAN MARCOS MZ. A LOTE 09',
        coords: { lat: -12.037083, lng: -76.962250 },
        estado: ''
      },
      {
        cargo: 'SEGUNDO SUPLENTE',
        apellidosNombres: 'IVAN CESAR MONGE VALENZUELA',
        celular: '',
        dni: '',
        direccion: 'JR. EL QUETZAL 146 URB. SANTA ANITA',
        coords: { lat: -12.048556, lng: -76.965083 },
        estado: 'success'
      },
      {
        cargo: 'TERCER SUPLENTE',
        apellidosNombres: 'ALDAIR RODRIGO MORALES SANTIAGO',
        celular: '',
        dni: '',
        direccion: 'CALLE JOSE CARLOS MARIATEGUI 155 COOP. LA UNIVERSAL',
        coords: { lat: -12.041389, lng: -76.979806 },
        estado: ''
      },
      {
        cargo: 'CUARTO SUPLENTE',
        apellidosNombres: 'JUAN CARLOS MONDRAGON HEREDIA',
        celular: '',
        dni: '44772770',
        direccion: 'URB. LOS PRODUCTORES MZ. L LOTE 12',
        coords: { lat: -12.035028, lng: -76.953417 },
        estado: ''
      },
      {
        cargo: 'QUINTO SUPLENTE',
        apellidosNombres: 'OLENKA NICOLE MITMA MONTALVO',
        celular: '',
        dni: '75693581',
        direccion: 'ASOC. LA ENCALADA MZ. Ñ LOTE 11',
        coords: { lat: -12.032722, lng: -76.958806 },
        estado: ''
      },
      {
        cargo: 'SEXTO SUPLENTE',
        apellidosNombres: 'LENER MONTOYA FERNANDEZ',
        celular: '',
        dni: '',
        direccion: 'JR. LOS CANARIOS 313 SANTA ANITA',
        coords: { lat: -12.048222, lng: -76.967111 },
        estado: ''
      }
    ]
  },

  // ===============================================================
  // MESA 061397
  // ===============================================================
  {
    id: '061397',
    titulo: 'Mesa 061397',
    integrantes: [
      {
        cargo: 'PRESIDENTE',
        apellidosNombres: 'HERMAN ALEJANDRO ONCEBAY LINO',
        celular: '',
        dni: '75038773',
        direccion: 'CALLE SAN MARCOS MZ. C LOTE 5 AH. SAN MARCOS DE ATE SECTOR',
        coords: { lat: -12.041861, lng: -76.962750 },
        estado: ''
      },
      {
        cargo: 'SECRETARIO',
        apellidosNombres: 'JOSE NINA CALDERON',
        celular: '',
        dni: '42023025',
        direccion: 'CULTURA WARI 310 COOP. LOS CHANCAS DE ANDAHUAYLAS',
        coords: { lat: -12.041306, lng: -76.970917 },
        estado: ''
      },
      {
        cargo: 'TERCER MIEMBRO',
        apellidosNombres: 'JUAN JOSE DANIEL NAVARRO CHUMBIMUNE',
        celular: '900144021',
        dni: '43258039',
        direccion: 'CALLE LAS PERDICES 455 PISO 3',
        coords: { lat: -12.051778, lng: -76.965056 },
        estado: ''
      },
      {
        cargo: 'PRIMER SUPLENTE',
        apellidosNombres: 'MARISOL MOZOMBITE SHUÑA',
        celular: '',
        dni: '10124838',
        direccion: 'CALLE JUSTINIANO MINAYA SOSA 380 COOP. VIV. LA UNIVERSAL',
        coords: { lat: -12.043306, lng: -76.977472 },
        estado: ''
      },
      {
        cargo: 'SEGUNDO SUPLENTE',
        apellidosNombres: 'LILIAN CARMEN ROSINA MUÑOZ ZAPATA',
        celular: '',
        dni: '09362697',
        direccion: 'LAS GOLONDRINAS 431',
        coords: { lat: -12.051333, lng: -76.964139 },
        estado: ''
      },
      {
        cargo: 'TERCER SUPLENTE',
        apellidosNombres: 'DIEGO ARMANDO NEYRA HUAMAN',
        celular: '',
        dni: '48187335',
        direccion: 'ASOC. PROP. PRADERAS DE SANTA ANITA ETAPA 2 MZ.V LOTE 12',
        coords: { lat: -12.027833, lng: -76.964583 },
        estado: ''
      },
      {
        cargo: 'CUARTO SUPLENTE',
        apellidosNombres: 'ANABEL NICOL NOREÑA CONDORI',
        celular: '',
        dni: '72319486',
        direccion: 'ASOC. MONTERREY MZ. B LOTE 30',
        coords: { lat: -12.043556, lng: -76.955972 },
        estado: ''
      },
      {
        cargo: 'QUINTO SUPLENTE',
        apellidosNombres: 'JHON MANUEL NINA CABALLERO',
        celular: '',
        dni: '',
        direccion: 'CALLE MARIA PARADO DE BELLIDO 363 COOP. UNIVERSAL ETAPA',
        coords: { lat: -12.043167, lng: -76.982611 },
        estado: 'success'
      },
      {
        cargo: 'SEXTO SUPLENTE',
        apellidosNombres: 'MIRIAM LILIANA NUÑEZ MILLAN',
        celular: '',
        dni: '21262908',
        direccion: 'CALLE LOS JILGUEROS 369 URB. SANTA ANITA 2DO SECTOR',
        coords: { lat: -12.047556, lng: -76.966806 },
        estado: ''
      }
    ]
  },

    // ===============================================================
  // MESA 061399
  // ===============================================================
  {
    id: '061399',
    titulo: 'Mesa 061399',
    integrantes: [
      {
        cargo: 'PRESIDENTE',
        apellidosNombres: 'YULY PAREJA LANDA',
        celular: '997438909',
        dni: '40208374',
        direccion: 'ASOC. SAPOTAL MZ. E9 LOTE 33',
        coords: { lat: -12.043722, lng: -76.949917 },
        estado: ''
      },
      {
        cargo: 'SECRETARIO',
        apellidosNombres: 'ESTHER MELISSA PEÑA OSCO',
        celular: '934845556',
        dni: '45391294',
        direccion: 'URB. LOS CEDROS MZ. E-5 LOTE 12',
        coords: { lat: -12.042361, lng: -76.951889 },
        estado: ''
      },
      {
        cargo: 'TERCER MIEMBRO',
        apellidosNombres: 'YRINA ELIZABETH PASARA MOSCOL',
        celular: '',
        dni: '16803541',
        direccion: 'PARQUE 3 URB. SAN CARLOS MZ. U LOTE 2',
        coords: { lat: -12.035556, lng: -76.959028 },
        estado: ''
      },
      {
        cargo: 'PRIMER SUPLENTE',
        apellidosNombres: 'GIANFRANCO JESUS PEREZ ORELLANA',
        celular: '',
        dni: '72510461',
        direccion: 'CALLE ANTONIO PORTUGAL 721 URB. LOS FICUS',
        coords: { lat: -12.048611, lng: -76.973333 },
        estado: ''
      },
      {
        cargo: 'SEGUNDO SUPLENTE',
        apellidosNombres: 'RUTH ELENA PARRA WILLIAMS',
        celular: '',
        dni: '',
        direccion: 'EL QUETZAL 137 URB. SANTA ANITA',
        coords: { lat: -12.048556, lng: -76.965250 },
        estado: 'success'
      },
      {
        cargo: 'TERCER SUPLENTE',
        apellidosNombres: 'JORGE LUIS PANLLO HUARANGA',
        celular: '',
        dni: '71056146',
        direccion: 'PSJ. SIETE ENSAYOS MZ. 12 LOTE 10',
        coords: { lat: -12.035722, lng: -76.953389 },
        estado: ''
      },
      {
        cargo: 'CUARTO SUPLENTE',
        apellidosNombres: 'JAVIER GREGORIO PEÑA DE LA CRUZ',
        celular: '',
        dni: '41090114',
        direccion: 'MZ. B LOTE 23 SANTA AURELIA',
        coords: { lat: -12.037583, lng: -76.952389 },
        estado: ''
      },
      {
        cargo: 'QUINTO SUPLENTE',
        apellidosNombres: 'JUAN ANTONY PARRAGA TAIPE',
        celular: '',
        dni: '47993458',
        direccion: 'CALLE 23 ASOC. RESIDENCIAL SANTA ANITA MZ.B9 LOTE 37',
        coords: { lat: -12.040083, lng: -76.951222 },
        estado: ''
      },
      {
        cargo: 'SEXTO SUPLENTE',
        apellidosNombres: 'RENZO RAUL PEREZ IRCAÑAUPA',
        celular: '',
        dni: '',
        direccion: 'AMPLIACION LAS PRADERAS CALLE VIRU MZ. A2 LOTE 20',
        coords: { lat: -12.033999, lng: -76.964639 },
        estado: 'success'
      }
    ]
  }
];

/* =====================================================================
   RENDERIZADO
   ===================================================================== */

const contenedor = document.getElementById('contenedor-mesas');

function crearMesa(mesa) {
  const section = document.createElement('section');
  section.className = 'mesa';
  section.id = `mesa-${mesa.id}`;

  const h2 = document.createElement('h2');
  h2.textContent = mesa.titulo;

  const badge = document.createElement('span');
  badge.textContent = `${mesa.integrantes.length} integrantes`;
  h2.appendChild(badge);
  section.appendChild(h2);

  const tablaWrap = document.createElement('div');
  tablaWrap.className = 'tabla-responsive';

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const trHead = document.createElement('tr');
  ['Cargo', 'Apellidos y nombres', 'Celular', 'DNI', 'Dirección', 'Estado', 'Mapa']
    .forEach(t => {
      const th = document.createElement('th');
      th.textContent = t;
      trHead.appendChild(th);
    });
  thead.appendChild(trHead);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  mesa.integrantes.forEach(i => tbody.appendChild(crearFila(i)));
  table.appendChild(tbody);
  tablaWrap.appendChild(table);
  section.appendChild(tablaWrap);
  return section;
}

function crearFila(i) {
  const tr = document.createElement('tr');

  // Cargo
  tr.appendChild(crearCelda(i.cargo));

  // Apellidos y nombres
  tr.appendChild(crearCelda(i.apellidosNombres));

  // Celular (in process si está vacío)
  tr.appendChild(crearCelda(i.celular || 'in process', 'dato-numerico'));

  // DNI (in process si está vacío)
  tr.appendChild(crearCelda(i.dni || 'in process', 'dato-numerico'));

  // Dirección
  tr.appendChild(crearCelda(i.direccion));

  // Estado
  const tdEstado = document.createElement('td');
  const span = document.createElement('span');
  span.className = `estado ${claseEstado(i.estado)}`;
  span.textContent = i.estado || '—';
  tdEstado.appendChild(span);
  tr.appendChild(tdEstado);

  // Botón View map
  const tdMapa = document.createElement('td');
  if (i.coords && i.coords.lat && i.coords.lng) {
    const a = document.createElement('a');
    a.className = 'btn-mapa';
    a.href = `https://www.google.com/maps?q=${i.coords.lat},${i.coords.lng}`;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
           stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
      View map
    `;
    tdMapa.appendChild(a);
  } else {
    tdMapa.textContent = '—';
  }
  tr.appendChild(tdMapa);

  return tr;
}

function crearCelda(v, c = '') {
  const td = document.createElement('td');
  if (c) td.className = c;
  td.textContent = (v && v.trim() !== '') ? v : '—';
  return td;
}

function claseEstado(e = '') {
  const x = e.toUpperCase();
  if (x.includes('SUCCESS'))     return 'success';
  if (x.includes('NO ASISTIRA')) return 'no-asistira';
  if (x.includes('ENTREGADO'))   return 'entregado';
  return 'sin-estado';
}

function renderizarMesas() {
  contenedor.innerHTML = '';
  MESAS.forEach(m => contenedor.appendChild(crearMesa(m)));
}

renderizarMesas();