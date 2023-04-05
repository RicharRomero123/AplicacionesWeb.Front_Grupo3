<template>
    <footer class="container-footer">
        <div class="footer1">
            <div style="color: greenyellow;">
                © 2022 Todos los Derechos Reservados 
            </div>

            <div style="color: greenyellow;">
                Informacion Compañia |  Privacion y Politica | Terminos y Condiciones

                <div class="direccion" style="color:aqua">
                    <div>venta@library.com</div>
                    <div>98622558</div>
                    <div>Los Manzanos 398</div>
                </div>
<<<<<<< HEAD
=======


>>>>>>> origin/master
            </div>
                
            <div style="color: greenyellow;">
                
                Idioma
                <select name="idioma" id="idioma">
                    <option value="Español">Español</option>
                    <option value="Inglés">Inglés</option>
                </select>
               
            </div>

        </div>
    </footer>

</template>

<style>
.direccion{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    
}


.footer1{
    width: 100%;
    background: #22242E;
    color: #22242E;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.container-footer{
    background-color: #22242E;
    padding: 1em 0;
    text-align: center;
    position: absolute;
    bottom: 0%;
    width: 100%;
    
}
</style>