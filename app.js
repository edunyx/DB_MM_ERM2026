/* =====================================================================
   DATOS DE LAS MESAS
   ---------------------------------------------------------------------
   Cada integrante: cargo, apellidosNombres, celular, celularesExtra,
                    dni, direccion, coords { lat, lng }, estado, nota
   ---------------------------------------------------------------------
   - celular: números que ya estaban en la página (string con comas)
   - celularesExtra: array de strings con números nuevos a verificar
   - estado: '', 'success', 'notification', 'not found', 'unknow'
   - nota: texto opcional que se muestra debajo del badge de estado
   - certificado: ruta opcional al PDF del certificado
   - Los descartes se guardan en localStorage bajo 'descartados_celulares'
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
        celularesExtra: ['978536258', '912732573', '955221129', '735836087'],
        dni: '76566756',
        direccion: 'CALLE 4 CP NOCHETO MZ. B LOTE 3',
        coords: { lat: -12.044805, lng: -76.985083 },
        estado: '',
        nota: ''
      },
      {
        cargo: 'SECRETARIO',
        apellidosNombres: 'ANA MARIA MEZA LEON',
        celular: '967052237',
        celularesExtra: [],
        dni: '40543952',
        direccion: 'AV. MANUEL DE LA TORRE 499 URB. LOS FICUS',
        coords: { lat: -12.051639, lng: -76.970139 },
        estado: 'success',
        nota: ''
      },
      {
        cargo: 'TERCER MIEMBRO',
        apellidosNombres: 'JOSE GILMER MIGUEL AGUILAR',
        celular: '994615929',
        celularesExtra: ['968510545', '954314824', '999967821', '14360001'],
        dni: '17930902',
        direccion: 'JR. LOS ZORZALES 114',
        coords: { lat: -12.053222, lng: -76.962917 },
        estado: 'unknown',
        nota: ''
      },
      {
        cargo: 'PRIMER SUPLENTE',
        apellidosNombres: 'ELIZABETH MOISES ORE DE CORILLA',
        celular: '971731842',
        celularesExtra: [],
        dni: '41007813',
        direccion: 'AAHH SAN MARCOS MZ. A LOTE 09',
        coords: { lat: -12.037083, lng: -76.962250 },
        estado: '',
        nota: ''
      },
      {
        cargo: 'SEGUNDO SUPLENTE',
        apellidosNombres: 'IVAN CESAR MONGE VALENZUELA',
        celular: '994616267',
        celularesExtra: [],
        dni: '10050960',
        direccion: 'JR. EL QUETZAL 146 URB. SANTA ANITA',
        coords: { lat: -12.048556, lng: -76.965083 },
        estado: 'success',
        nota: ''
      },
      {
        cargo: 'TERCER SUPLENTE',
        apellidosNombres: 'ALDAIR RODRIGO MORALES SANTIAGO',
        celular: '991222234',
        celularesExtra: [],
        dni: '73663044',
        direccion: 'CALLE JOSE CARLOS MARIATEGUI 155 COOP. LA UNIVERSAL',
        coords: { lat: -12.041389, lng: -76.979806 },
        estado: '',
        nota: ''
      },
      {
        cargo: 'CUARTO SUPLENTE',
        apellidosNombres: 'JUAN CARLOS MONDRAGON HEREDIA',
        celular: '952606642',
        celularesExtra: ['974221652', '987365868', '966122918', '991423403'],
        dni: '44772770',
        direccion: 'URB. LOS PRODUCTORES MZ. L LOTE 12',
        coords: { lat: -12.035028, lng: -76.953417 },
        estado: 'not found',
        nota: ''
      },
      {
        cargo: 'QUINTO SUPLENTE',
        apellidosNombres: 'OLENKA NICOLE MITMA MONTALVO',
        celular: '954710891',
        celularesExtra: ['978453326', '992661745', '984314163'],
        dni: '75693581',
        direccion: 'ASOC. LA ENCALADA MZ. Ñ LOTE 11',
        coords: { lat: -12.032722, lng: -76.958806 },
        estado: '',
        nota: ''
      },
      {
        cargo: 'SEXTO SUPLENTE',
        apellidosNombres: 'LENER MONTOYA FERNANDEZ',
        celular: '916384386, 971731842',
        celularesExtra: [],
        dni: '40130877',
        direccion: 'JR. LOS CANARIOS 313 SANTA ANITA',
        coords: { lat: -12.048222, lng: -76.967111 },
        estado: 'success',
        nota: 'EN ESPAÑA'
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
        celularesExtra: [],
        dni: '75038773',
        direccion: 'CALLE SAN MARCOS MZ. C LOTE 5 AH. SAN MARCOS DE ATE SECTOR',
        coords: { lat: -12.041861, lng: -76.962750 },
        estado: 'unknow',
        nota: ''
      },
      {
        cargo: 'SECRETARIO',
        apellidosNombres: 'JOSE NINA CALDERON',
        celular: '969988587',
        celularesExtra: [],
        dni: '42023025',
        direccion: 'CULTURA WARI 310 COOP. LOS CHANCAS DE ANDAHUAYLAS',
        coords: { lat: -12.041306, lng: -76.970917 },
        estado: 'success',
        nota: ''
      },
      {
        cargo: 'TERCER MIEMBRO',
        apellidosNombres: 'JUAN JOSE DANIEL NAVARRO CHUMBIMUNE',
        celular: '900144021',
        celularesExtra: [
          '73612806', '998302024', '923833302', '931603554',
          '73397092', '988613616', '5173612806', '933476488', '973088533'
        ],
        dni: '43258039',
        direccion: 'CALLE LAS PERDICES 455 PISO 3',
        coords: { lat: -12.051778, lng: -76.965056 },
        estado: 'unknow',
        nota: ''
      },
      {
        cargo: 'PRIMER SUPLENTE',
        apellidosNombres: 'MARISOL MOZOMBITE SHUÑA',
        celular: '988633159, 13617492',
        celularesExtra: ['953245908'],
        dni: '10124838',
        direccion: 'CALLE JUSTINIANO MINAYA SOSA 380 COOP. VIV. LA UNIVERSAL',
        coords: { lat: -12.043306, lng: -76.977472 },
        estado: 'not found',
        nota: ''
      },
      {
        cargo: 'SEGUNDO SUPLENTE',
        apellidosNombres: 'LILIAN CARMEN ROSINA MUÑOZ ZAPATA',
        celular: '',
        celularesExtra: [],
        dni: '09362697',
        direccion: 'LAS GOLONDRINAS 431',
        coords: { lat: -12.051333, lng: -76.964139 },
        estado: 'not found',
        nota: ''
      },
      {
        cargo: 'TERCER SUPLENTE',
        apellidosNombres: 'DIEGO ARMANDO NEYRA HUAMAN',
        celular: '976098409',
        celularesExtra: ['975235335', '970773310', '940425823', '974324822'],
        dni: '48187335',
        direccion: 'ASOC. PROP. PRADERAS DE SANTA ANITA ETAPA 2 MZ.V LOTE 12',
        coords: { lat: -12.027833, lng: -76.964583 },
        estado: '',
        nota: ''
      },
      {
        cargo: 'CUARTO SUPLENTE',
        apellidosNombres: 'ANABEL NICOL NOREÑA CONDORI',
        celular: '934169336',
        celularesExtra: [],
        dni: '72319486',
        direccion: 'ASOC. MONTERREY MZ. B LOTE 30',
        coords: { lat: -12.043556, lng: -76.955972 },
        estado: 'success',
        nota: ''
      },
      {
        cargo: 'QUINTO SUPLENTE',
        apellidosNombres: 'JHON MANUEL NINA CABALLERO',
        celular: '990778759',
        celularesExtra: [],
        dni: '46133046',
        direccion: 'CALLE MARIA PARADO DE BELLIDO 363 COOP. UNIVERSAL ETAPA',
        coords: { lat: -12.043167, lng: -76.982611 },
        estado: 'success',
        nota: ''
      },
      {
        cargo: 'SEXTO SUPLENTE',
        apellidosNombres: 'MIRIAM LILIANA NUÑEZ MILLAN',
        celular: '912389300, 965672240',
        celularesExtra: ['983434545', '51912389300'],
        dni: '21262908',
        direccion: 'CALLE LOS JILGUEROS 369 URB. SANTA ANITA 2DO SECTOR',
        coords: { lat: -12.047556, lng: -76.966806 },
        estado: 'not found',
        nota: ''
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
        celularesExtra: ['', ''],
        dni: '40208374',
        direccion: 'ASOC. SAPOTAL MZ. E9 LOTE 33',
        coords: { lat: -12.043722, lng: -76.949917 },
        estado: 'success',
        nota: ''
      },
      {
        cargo: 'SECRETARIO',
        apellidosNombres: 'ESTHER MELISSA PEÑA OSCO',
        celular: '934845556',
        celularesExtra: [
          '', '', '', '',
          '', '', ''
        ],
        dni: '45391294',
        direccion: 'URB. LOS CEDROS MZ. E-5 LOTE 12',
        coords: { lat: -12.042361, lng: -76.951889 },
        estado: 'success',
        nota: ''
      },
      {
        cargo: 'TERCER MIEMBRO',
        apellidosNombres: 'YRINA ELIZABETH PASARA MOSCOL',
        celular: '',
        celularesExtra: [
          '916947140', '989221087', '991318453', '991169171',
          '942731135', '980636227', '922125950'
        ],
        dni: '16803541',
        direccion: 'PARQUE 3 URB. SAN CARLOS MZ. U LOTE 2',
        coords: { lat: -12.035556, lng: -76.959028 },
        estado: 'unknow',
        nota: ''
      },
      {
        cargo: 'PRIMER SUPLENTE',
        apellidosNombres: 'GIANFRANCO JESUS PEREZ ORELLANA',
        celular: '971271007',
        celularesExtra: ['949858705'],
        dni: '72510461',
        direccion: 'CALLE ANTONIO PORTUGAL 721 URB. LOS FICUS',
        coords: { lat: -12.048611, lng: -76.973333 },
        estado: 'not found',
        nota: ''
      },
      {
        cargo: 'SEGUNDO SUPLENTE',
        apellidosNombres: 'RUTH ELENA PARRA WILLIAMS',
        celular: '940298671',
        celularesExtra: [],
        dni: '06131287',
        direccion: 'EL QUETZAL 137 URB. SANTA ANITA',
        coords: { lat: -12.048556, lng: -76.965250 },
        estado: 'success',
        nota: '',
        /*certificado: 'certificados/ruth-elena-parra-williams.pdf'*/
      },
      {
        cargo: 'TERCER SUPLENTE',
        apellidosNombres: 'JORGE LUIS PANLLO HUARANGA',
        celular: '997364405',
        celularesExtra: [
          '940650030', '991661241', '948790025', '987719170',
          '997407061', '912372007', '51997364405', '940120438',
          '993897045', '972327835', '957368029'
        ],
        dni: '71056146',
        direccion: 'PSJ. SIETE ENSAYOS MZ. 12 LOTE 10',
        coords: { lat: -12.035722, lng: -76.953389 },
        estado: '',
        nota: ''
      },
      {
        cargo: 'CUARTO SUPLENTE',
        apellidosNombres: 'JAVIER GREGORIO PEÑA DE LA CRUZ',
        celular: '979629038, 970348853',
        celularesExtra: ['932413113', '986933399'],
        dni: '41090114',
        direccion: 'MZ. B LOTE 23 SANTA AURELIA',
        coords: { lat: -12.037583, lng: -76.952389 },
        estado: 'notification',
        nota: 'PROVINCIA'
      },
      {
        cargo: 'QUINTO SUPLENTE',
        apellidosNombres: 'JUAN ANTONY PARRAGA TAIPE',
        celular: '',
        celularesExtra: [],
        dni: '47993458',
        direccion: 'CALLE 23 ASOC. RESIDENCIAL SANTA ANITA MZ.B9 LOTE 37',
        coords: { lat: -12.040083, lng: -76.951222 },
        estado: 'unknow',
        nota: ''
      },
      {
        cargo: 'SEXTO SUPLENTE',
        apellidosNombres: 'RENZO RAUL PEREZ IRCAÑAUPA',
        celular: '986260956',
        celularesExtra: [],
        dni: '76821578',
        direccion: 'AMPLIACION LAS PRADERAS CALLE VIRU MZ. A2 LOTE 20',
        coords: { lat: -12.033999, lng: -76.964639 },
        estado: 'success',
        nota: ''
      }
    ]
  }
];

/* =====================================================================
   PERSISTENCIA DE DESCARTADOS (localStorage)
   ===================================================================== */
const LS_KEY = 'descartados_celulares';

function getDescartados() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function setDescartados(arr) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(arr));
  } catch (e) { /* ignorar */ }
}

function estaDescartado(numero) {
  return getDescartados().includes(String(numero).trim());
}

function descartarNumero(numero) {
  const num = String(numero).trim();
  const actuales = getDescartados();
  if (!actuales.includes(num)) {
    actuales.push(num);
    setDescartados(actuales);
  }
  renderizarMesas();
}

/* =====================================================================
   DESCARTADOS POR DEFECTO (se tachan al cargar)
   ===================================================================== */
const DESCARTADOS_DEFECTO = ['942088960', '978536258', '994615929'];
(function aplicarDescartadosDefecto() {
  const actuales = getDescartados();
  let cambio = false;
  DESCARTADOS_DEFECTO.forEach(n => {
    if (!actuales.includes(n)) { actuales.push(n); cambio = true; }
  });
  if (cambio) setDescartados(actuales);
})();

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

  // Apellidos y nombres (+ botón certificado si aplica)
  const tdNombre = document.createElement('td');
  tdNombre.textContent = i.apellidosNombres;

  if (i.certificado) {
    const link = document.createElement('a');
    link.className = 'btn-certificado';
    link.href = i.certificado;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.innerHTML = '📄 Ver Certificado';
    tdNombre.appendChild(link);
  }

  tr.appendChild(tdNombre);

  // Celular
  tr.appendChild(crearCeldaCelulares(i));

  // DNI
  tr.appendChild(crearCelda(i.dni || 'in process', 'dato-numerico'));

  // Dirección
  tr.appendChild(crearCelda(i.direccion));

  // Estado + nota
  const tdEstado = document.createElement('td');
  const span = document.createElement('span');
  span.className = `estado ${claseEstado(i.estado)}`;
  span.textContent = i.estado || '—';
  tdEstado.appendChild(span);

  if (i.nota && i.nota.trim() !== '') {
    const nota = document.createElement('div');
    nota.className = 'estado-nota';
    nota.textContent = i.nota;
    tdEstado.appendChild(nota);
  }

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

/**
 * Construye la celda de Celular con todos los números (existentes + extra)
 * renderizados uno por línea, cada uno con su botón ✗ si no está descartado.
 */
function crearCeldaCelulares(integrante) {
  const td = document.createElement('td');
  td.className = 'dato-numerico celda-celulares';

  const existentes = (integrante.celular || '')
    .split(',')
    .map(s => s.trim())
    .filter(Boolean);

  const extra = (integrante.celularesExtra || [])
    .map(s => String(s).trim())
    .filter(Boolean);

  const todos = [...existentes, ...extra];

  if (todos.length === 0) {
    td.textContent = 'in process';
    return td;
  }

  const lista = document.createElement('div');
  lista.className = 'celulares-lista';

  todos.forEach(numero => {
    const item = document.createElement('div');
    item.className = 'celular-item';

    const span = document.createElement('span');
    span.className = 'celular-numero';
    span.textContent = numero;

    if (estaDescartado(numero)) {
      item.classList.add('descartado');
      item.appendChild(span);
    } else {
      const btn = document.createElement('button');
      btn.className = 'btn-descartar';
      btn.type = 'button';
      btn.title = 'Descartar este número';
      btn.setAttribute('aria-label', `Descartar ${numero}`);
      btn.textContent = '✗';
      btn.addEventListener('click', () => descartarNumero(numero));

      item.appendChild(span);
      item.appendChild(btn);
    }

    lista.appendChild(item);
  });

  td.appendChild(lista);
  return td;
}

function crearCelda(v, c = '') {
  const td = document.createElement('td');
  if (c) td.className = c;
  td.textContent = (v && String(v).trim() !== '') ? v : '—';
  return td;
}

function claseEstado(e = '') {
  const x = String(e).toUpperCase();
  if (x.includes('SUCCESS'))      return 'success';
  if (x.includes('NOTIFICATION')) return 'notification';
  if (x.includes('NOT FOUND'))    return 'not-found';
  if (x.includes('UNKNOW'))       return 'unknow';
  if (x.includes('NO ASISTIRA'))  return 'no-asistira';
  if (x.includes('ENTREGADO'))    return 'entregado';
  return 'sin-estado';
}

function renderizarMesas() {
  contenedor.innerHTML = '';
  MESAS.forEach(m => contenedor.appendChild(crearMesa(m)));
}

/* =====================================================================
   FOOTER: año dinámico
   ===================================================================== */
const anioEl = document.getElementById('footer-anio');
if (anioEl) anioEl.textContent = new Date().getFullYear();

/* =====================================================================
   INICIALIZACIÓN
   ===================================================================== */
renderizarMesas();