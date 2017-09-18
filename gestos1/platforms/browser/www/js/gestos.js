var app = {    
    inicio: function() {
	  this.iniciaBotones();
	  this.iniciaFastClick();
	  this.iniciaHammer();
	},
	
	iniciaFastClick: function() {
	  FastClick.attach(document.body);
	},
	
	iniciaHammer: function() {
	  var zona = document.querySelector('#zona-gestos');
	  var hammertime = new Hammer(zona);
	  
	  hammertime.get('pinch').set({ enable: true });
	  hammertime.get('rotate').set({ enable: true });
	  /*hammertime.on('tap doubletap pan swipe press pinch rotate', function(ev) {
		document.querySelector('#info').innerHTML = ev.type + '!';
	  });*/
	  
	  zona.addEventListener('webkitAnimationEnd', function(evt) {
		  zona.className = '';
	  });
	  
	  hammertime.on('doubletap', function(ev) {
		  zona.className = 'doubletap';
	  });
	  hammertime.on('press', function(ev) {
		  zona.className = 'press';
	  });
	  hammertime.on('swipe', function(ev) {
		  var clase = undefined;
		  var direccion = ev.direction;
		  
		  if (direccion == 4) clase = "swipe-derecha";
		  if (direccion == 2) clase = "swipe-izquierda";
		  
		  zona.className = clase;
	  });
	  hammertime.on('rotate', function(ev) {
		  var umbral = 25;
		  if (ev.distance > umbral) zona.className = 'rotate';
	  });
	},
	
	iniciaBotones: function() {        
	  let botonClaro = document.querySelector("#claro");
	  let botonOscuro = document.querySelector("#oscuro");
		
	  botonClaro.addEventListener('click', this.ponloClaro, false);
	  botonOscuro.addEventListener('click', this.ponloOscuro, false);
    },
	
	ponloClaro: function() {
	  document.body.className = 'claro';
	},
	
	ponloOscuro: function() {
	  document.body.className = 'oscuro';
	} 	
};