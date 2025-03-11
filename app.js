document.getElementById('fecha-actual').textContent = new Date().toLocaleDateString();

const inventario = [
     // ... (mantener el mismo array de datos del inventario)
    // Ejemplo de datos que se pueden copiar desde Excel
    { codigo: '03.02.01.012.00', nombre: 'ALUSA PLAS (45 X 1400 MT)', un: 'UN', cantidadAnterior: 3, valorUnitario: 32500 },
    { codigo: '01.05.01.002.00', nombre: 'ACEITE DE OLIVA LT', un: 'LT', cantidadAnterior: 1.90, valorUnitario: 6113.33 },
    { codigo: '01.05.01.008.00', nombre: 'ACEITE MARAVILLA SACHET 8 CC', un: 'UN', cantidadAnterior: 600.00, valorUnitario: 25.28 },
    { codigo: '01.05.01.001.00', nombre: 'ACEITE VEGETAL LT', un: 'LT', cantidadAnterior: 0.90, valorUnitario: 1199.08 },
    { codigo: '01.08.01.001.00', nombre: 'ACELGA KG', un: 'KG', cantidadAnterior: 1.00, valorUnitario: 1170.00 },
    { codigo: '01.21.01.003.00', nombre: 'AJI CREMA KG', un: 'KG', cantidadAnterior: 1.00, valorUnitario: 299.40 },
    { codigo: '01.08.01.010.00', nombre: 'AJO FRESCO KG', un: 'KG', cantidadAnterior: 0.10, valorUnitario: 3802.72 },
    { codigo: '01.06.01.002.00', nombre: 'ARROZ GRADO DOS KG', un: 'KG', cantidadAnterior: 6.65, valorUnitario: 877.39 },
    { codigo: '01.06.05.001.00', nombre: 'ARVEJAS SECAS GRADO DOS K', un: 'KG', cantidadAnterior: 2.00, valorUnitario: 995.00 },
    { codigo: '01.01.14.012.00', nombre: 'AVENA C/LECHE INCORPORADA', un: 'KG', cantidadAnterior: 1.00, valorUnitario: 1720.00 },
    { codigo: '01.10.01.002.00', nombre: 'AZUCAR FLOR KG', un: 'KG', cantidadAnterior: 0.20, valorUnitario: 1450.00 },
    { codigo: '01.10.01.001.00', nombre: 'AZUCAR GRANULADA', un: 'KG', cantidadAnterior: 0.50, valorUnitario: 700.00 },
    { codigo: '01.18.03.180.00', nombre: 'BARRA CEREAL CHOCOLATE CHI', un: 'UN', cantidadAnterior: 78.00, valorUnitario: 135.96 },
    { codigo: '01.18.03.025.00', nombre: 'BARRA CEREAL FRUTA YOGURT', un: 'UN', cantidadAnterior: 120.00, valorUnitario: 135.36 },
    { codigo: '01.18.03.181.00', nombre: 'BARRA CEREAL FRUTOS ROJOS', un: 'UN', cantidadAnterior: 240.00, valorUnitario: 136.00 },
    { codigo: '01.06.01.079.00', nombre: 'BARRA DE CEREAL CHOCOLATE', un: 'UN', cantidadAnterior: 320.00, valorUnitario: 62.43 },
    { codigo: '01.21.03.002.00', nombre: 'BASE HAMBURGUESA KG', un: 'KG', cantidadAnterior: 0.85, valorUnitario: 1869.90 },
    { codigo: '01.11.02.240.00', nombre: 'BEBIDA PET BILZ 3 LTS', un: 'UN', cantidadAnterior: 4.00, valorUnitario: 1510.71 },
    { codigo: '01.11.02.242.00', nombre: 'BEBIDA PET LIMON SODA 3 LTS', un: 'UN', cantidadAnterior: 2.00, valorUnitario: 1510.00 },
    { codigo: '01.11.02.106.00', nombre: 'BEBIDA PET PEPSI 3 LTS', un: 'UN', cantidadAnterior: 1.00, valorUnitario: 1513.83 },
    { codigo: '01.21.03.004.00', nombre: 'CALDO CONCENTRADO AVE KG', un: 'KG', cantidadAnterior: 1.00, valorUnitario: 1798.00 },
    { codigo: '01.21.03.022.00', nombre: 'CALDO CONCENTRADO CARNE K', un: 'KG', cantidadAnterior: 0.47, valorUnitario: 1798.00 },
    { codigo: '01.21.02.045.00', nombre: 'CANELA ENTERA KG', un: 'KG', cantidadAnterior: 0.10, valorUnitario: 22156.00 },
    { codigo: '01.33.12.001.00', nombre: 'CARNE MOLIDA DE PAVO KG', un: 'KG', cantidadAnterior: 3.00, valorUnitario: 3355.75 },
    { codigo: '01.33.03.003.00', nombre: 'CARNE MOLIDA VACUNO 10% M', un: 'KG', cantidadAnterior: 1.00, valorUnitario: 3990.00 },
    { codigo: '01.07.01.001.00', nombre: 'CARNE VEGETAL KG', un: 'KG', cantidadAnterior: 0.20, valorUnitario: 1980.00 },
    { codigo: '01.08.01.006.00', nombre: 'CEBOLLA KG', un: 'KG', cantidadAnterior: 1.50, valorUnitario: 1090.85 },
    { codigo: '01.18.03.023.00', nombre: 'CEREALBAR GOLDEN LECHE 18 G', un: 'UN', cantidadAnterior: 480.00, valorUnitario: 136.00 },
    { codigo: '01.44.01.061.00', nombre: 'CHAMPIÑON SLICE CONGELADO', un: 'KG', cantidadAnterior: 1.50, valorUnitario: 1890.00 },
    { codigo: '01.44.01.003.00', nombre: 'CHOCLO GRANO CONGELADO K', un: 'KG', cantidadAnterior: 11.00, valorUnitario: 1260.33 },
    { codigo: '01.14.03.005.00', nombre: 'CHOCOLATE GRANULADO KG', un: 'KG', cantidadAnterior: 0.80, valorUnitario: 3890.00 },
    { codigo: '01.35.01.004.00', nombre: 'CHORIZO DE CERDO KG', un: 'KG', cantidadAnterior: 2.40, valorUnitario: 2545.00 },
    { codigo: '01.33.16.001.00', nombre: 'CHULETA DE CERDO CENTRO (18', un: 'KG', cantidadAnterior: 4.15, valorUnitario: 3432.41 },
    { codigo: '01.33.02.012.00', nombre: 'CHURRASCO VACUNO (120 GRS)', un: 'KG', cantidadAnterior: 2.10, valorUnitario: 5078.19 },
    { codigo: '01.09.03.004.00', nombre: 'CIRUELA CON CAROZZO KG', un: 'KG', cantidadAnterior: 0.65, valorUnitario: 3940.91 },
    { codigo: '01.09.01.002.00', nombre: 'CIRUELAS FRESCAS KG', un: 'KG', cantidadAnterior: 1.00, valorUnitario: 1270.00 },
    { codigo: '01.44.01.005.00', nombre: 'COLIFLOR CONGELADA KG', un: 'KG', cantidadAnterior: 4.00, valorUnitario: 1388.75 },
    { codigo: '01.21.03.006.00', nombre: 'CONCENTRADO DE TOMATE KG', un: 'KG', cantidadAnterior: 1.75, valorUnitario: 2144.58 },
    { codigo: '01.21.04.008.00', nombre: 'CREMA DE POLLO KG', un: 'KG', cantidadAnterior: 0.39, valorUnitario: 1700.00 },
    { codigo: '01.21.04.007.00', nombre: 'CREMA DE VERDURAS (DESH) KG', un: 'KG', cantidadAnterior: 0.84, valorUnitario: 1749.00 },
    { codigo: '01.01.15.001.00', nombre: 'CREMA LECHE BATIR TETRA', un: 'LT', cantidadAnterior: 1.00, valorUnitario: 3174.00 },
    { codigo: '01.21.04.046.00', nombre: 'CREMA ZAPALLO DESH KG', un: 'KG', cantidadAnterior: 1.00, valorUnitario: 2800.00 },
    { codigo: '01.01.14.060.00', nombre: 'CREME CHOCOLATE NARANJA K', un: 'KG', cantidadAnterior: 1.00, valorUnitario: 3550.00 },
    { codigo: '01.01.14.063.00', nombre: 'CREME SELVA NEGRA KG', un: 'KG', cantidadAnterior: 1.00, valorUnitario: 3550.00 },
    { codigo: '01.09.05.010.00', nombre: 'DURAZNOS EN CONSERVA MITA', un: 'KG', cantidadAnterior: 2.77, valorUnitario: 2127.15 },
    { codigo: '01.14.05.013.00', nombre: 'EMPANADA DE PINO CONG. 155 G', un: 'UN', cantidadAnterior: 128.00, valorUnitario: 1009.40 },
    { codigo: '01.06.02.006.00', nombre: 'FIDEOS CABELLOS ANGEL CORT', un: 'KG', cantidadAnterior: 0.40, valorUnitario: 1050.00 },
    { codigo: '01.06.02.008.00', nombre: 'FIDEOS CORBATAS KG', un: 'KG', cantidadAnterior: 5.00, valorUnitario: 1075.00 },
    { codigo: '01.06.02.030.00', nombre: 'FIDEOS ESPIRALES KG', un: 'KG', cantidadAnterior: 3.00, valorUnitario: 1229.02 },
    { codigo: '01.06.02.009.00', nombre: 'FIDEOS QUIFAROS KG', un: 'KG', cantidadAnterior: 5.00, valorUnitario: 1522.40 },
    { codigo: '01.06.02.011.00', nombre: 'FIDEOS SPAGUETTI KG', un: 'KG', cantidadAnterior: 1.22, valorUnitario: 1198.00 },
    { codigo: '01.06.02.005.00', nombre: 'FIDEOS TALLARIN KG', un: 'KG', cantidadAnterior: 5.00, valorUnitario: 1926.17 },
    { codigo: '01.01.14.020.00', nombre: 'FLAN C/LECHE SAB. COCO KG', un: 'KG', cantidadAnterior: 1.00, valorUnitario: 1099.00 },
    { codigo: '01.01.14.024.00', nombre: 'FLAN C/LECHE SAB. FRUTILLA KG', un: 'KG', cantidadAnterior: 1.00, valorUnitario: 1910.00 },
    { codigo: '01.01.14.035.00', nombre: 'FLAN C/LECHE SAB. LUCUMA KG', un: 'KG', cantidadAnterior: 0.75, valorUnitario: 1910.00 },
    { codigo: '01.18.01.051.00', nombre: 'GALLETA FRAC 110 GRS.', un: 'UN', cantidadAnterior: 36.00, valorUnitario: 457.27 },
    { codigo: '01.18.01.075.00', nombre: 'GALLETA FRAC VAINILLA 110 GR', un: 'UN', cantidadAnterior: 30.00, valorUnitario: 476.47 },
    { codigo: '01.18.03.167.00', nombre: 'GALLETA MINI VINO 40 GRS', un: 'UN', cantidadAnterior: 606.00, valorUnitario: 182.66 },
    { codigo: '01.18.03.110.00', nombre: 'GALLETA SABOR LIMON 150 GRS', un: 'UN', cantidadAnterior: 28.00, valorUnitario: 580.00 },
    { codigo: '01.06.05.002.00', nombre: 'GARBANZOS SIN PIEL KG', un: 'KG', cantidadAnterior: 2.00, valorUnitario: 1500.00 },
    { codigo: '01.37.01.005.00', nombre: 'HAMBURGUESA DE VACUNO (10', un: 'KG', cantidadAnterior: 3.60, valorUnitario: 3300.00 },
    { codigo: '01.06.03.002.00', nombre: 'HARINA S/ POLVO HORNEAR KG', un: 'KG', cantidadAnterior: 1.50, valorUnitario: 950.12 },
    { codigo: '01.02.01.001.00', nombre: 'HUEVO UN', un: 'UN', cantidadAnterior: 68.00, valorUnitario: 142.00 },
    { codigo: '01.10.05.006.00', nombre: 'JALEA SABOR FRUTILLA KG', un: 'KG', cantidadAnterior: 0.75, valorUnitario: 3300.00 },
    { codigo: '01.10.05.002.00', nombre: 'JALEA SABOR LIMON KG', un: 'KG', cantidadAnterior: 0.65, valorUnitario: 3300.00 },
    { codigo: '01.10.05.008.00', nombre: 'JALEA SABOR MANZANA KG', un: 'KG', cantidadAnterior: 1.00, valorUnitario: 3300.00 },
    { codigo: '01.10.05.007.00', nombre: 'JALEA SABOR NARANJA KG', un: 'KG', cantidadAnterior: 1.00, valorUnitario: 3300.00 },
    { codigo: '01.10.05.009.00', nombre: 'JALEA SABOR PIÑA KG', un: 'KG', cantidadAnterior: 1.00, valorUnitario: 3300.00 },
    { codigo: '01.35.01.006.00', nombre: 'JAMON SANDWICH LAMINADO KG', un: 'KG', cantidadAnterior: 0.39, valorUnitario: 3500.00 },
    { codigo: '01.44.01.009.00', nombre: 'JARDINERA CONGELADA KG', un: 'KG', cantidadAnterior: 2.36, valorUnitario: 1300.00 },
    { codigo: '01.21.01.005.00', nombre: 'JUGO DE LIMON LT', un: 'LT', cantidadAnterior: 0.90, valorUnitario: 412.55 },
    { codigo: '01.21.01.246.00', nombre: 'JUGO LIMON SACHET 10 CC', un: 'UN', cantidadAnterior: 600.00, valorUnitario: 17.00 },
    { codigo: '01.11.01.044.00', nombre: 'JUGO NECTAR DURAZNO 200 CC', un: 'UN', cantidadAnterior: 79.00, valorUnitario: 180.17 },
    { codigo: '01.11.01.097.00', nombre: 'JUGO NECTAR PIÑA S/AZUCAR 2', un: 'UN', cantidadAnterior: 91.00, valorUnitario: 212.00 },
    { codigo: '01.04.04.009.00', nombre: 'JUREL EN CONSERVA AL NATUR', un: 'KG', cantidadAnterior: 1.28, valorUnitario: 2883.43 },
    { codigo: '01.01.14.006.00', nombre: 'LECHE ASADA C/LECHE INCORPO', un: 'KG', cantidadAnterior: 1.00, valorUnitario: 1945.00 },
    { codigo: '01.01.03.010.00', nombre: 'LECHE CONDENSADA KG', un: 'KG', cantidadAnterior: 0.40, valorUnitario: 2843.83 },
    { codigo: '01.01.14.005.00', nombre: 'LECHE NEVADA C/LECHE INCORP', un: 'KG', cantidadAnterior: 0.75, valorUnitario: 1730.00 },
    { codigo: '01.08.01.012.00', nombre: 'LECHUGA KG', un: 'KG', cantidadAnterior: 1.00, valorUnitario: 1470.00 },
    { codigo: '01.06.05.003.00', nombre: 'LENTEJAS SECAS KG', un: 'KG', cantidadAnterior: 2.00, valorUnitario: 1231.73 },
    { codigo: '01.06.01.004.00', nombre: 'MAICENA KG', un: 'KG', cantidadAnterior: 0.40, valorUnitario: 2350.00 },
    { codigo: '01.01.08.001.00', nombre: 'MANJAR DE LECHE KG', un: 'KG', cantidadAnterior: 3.00, valorUnitario: 1554.99 },
    { codigo: '01.05.02.002.00', nombre: 'MARGARINA KG', un: 'KG', cantidadAnterior: 0.25, valorUnitario: 1660.30 },
    { codigo: '01.09.01.015.00', nombre: 'MELON TUNA KG', un: 'KG', cantidadAnterior: 3.00, valorUnitario: 1170.00 },
    { codigo: '01.14.03.007.00', nombre: 'MERENGUE POLVO KG', un: 'KG', cantidadAnterior: 0.60, valorUnitario: 2121.00 },
    { codigo: '01.39.01.004.00', nombre: 'MERLUZA FILETE S/ ESPINAS CON', un: 'KG', cantidadAnterior: 3.00, valorUnitario: 2950.00 },
    { codigo: '01.10.07.015.00', nombre: 'MERMELADA DAMASCO', un: 'KG', cantidadAnterior: 0.50, valorUnitario: 1780.00 },
    { codigo: '01.21.01.029.00', nombre: 'MOSTAZA ENVASE KG', un: 'KG', cantidadAnterior: 0.40, valorUnitario: 756.50 },
    { codigo: '01.21.02.008.00', nombre: 'OREGANO ENTERO KG', un: 'KG', cantidadAnterior: 0.30, valorUnitario: 5400.00 },
    { codigo: '01.08.01.013.00', nombre: 'PAPA KG', un: 'KG', cantidadAnterior: 6.00, valorUnitario: 1150.00 },
    { codigo: '01.44.01.011.00', nombre: 'PAPAS PRE-FRITAS CONGELADA', un: 'KG', cantidadAnterior: 6.00, valorUnitario: 1480.00 },
    { codigo: '01.09.04.006.00', nombre: 'PASAS RUBIAS KG', un: 'KG', cantidadAnterior: 1.00, valorUnitario: 3650.00 },
    { codigo: '01.44.01.012.00', nombre: 'PASTELERA DE CHOCLO GONGEL', un: 'KG', cantidadAnterior: 7.00, valorUnitario: 1760.00 },
    { codigo: '01.35.02.004.00', nombre: 'PATE DE AVE KG', un: 'KG', cantidadAnterior: 0.25, valorUnitario: 2919.01 },
    { codigo: '01.35.03.001.00', nombre: 'PATE DE TERNERA KG', un: 'KG', cantidadAnterior: 0.38, valorUnitario: 2705.01 },
    { codigo: '01.33.07.003.00', nombre: 'PECHUGA POLLO S/HUESO KG', un: 'KG', cantidadAnterior: 15.90, valorUnitario: 3290.31 },
    { codigo: '01.21.02.009.00', nombre: 'PIMIENTA NEGRA MOLIDA KG', un: 'KG', cantidadAnterior: 0.70, valorUnitario: 8350.00 },
    { codigo: '01.08.01.016.00', nombre: 'PIMIENTO ROJO NATURAL KG', un: 'KG', cantidadAnterior: 2.00, valorUnitario: 4132.45 },
    { codigo: '01.09.01.057.00', nombre: 'PLATANO KG', un: 'KG', cantidadAnterior: 0.35, valorUnitario: 1570.00 },
    { codigo: '01.33.07.006.00', nombre: 'POLLO TRUTRO ENTERO KG', un: 'KG', cantidadAnterior: 8.67, valorUnitario: 1750.00 },
    { codigo: '01.06.05.006.00', nombre: 'POROTOS BLANCOS KG', un: 'KG', cantidadAnterior: 7.00, valorUnitario: 1812.15 },
    { codigo: '01.44.01.013.00', nombre: 'POROTOS GRANADOS CONGELA', un: 'KG', cantidadAnterior: 2.00, valorUnitario: 1910.00 },
    { codigo: '01.06.05.008.00', nombre: 'POROTOS HALLADOS KG', un: 'KG', cantidadAnterior: 1.00, valorUnitario: 1400.00 },
    { codigo: '01.44.01.014.00', nombre: 'POROTOS VERDES CONG. CORTE', un: 'KG', cantidadAnterior: 2.00, valorUnitario: 1578.84 },
    { codigo: '01.33.15.002.00', nombre: 'PULPA CERDO DESHUESADA KG', un: 'KG', cantidadAnterior: 21.16, valorUnitario: 2923.87 },
    { codigo: '01.21.05.002.00', nombre: 'PURE FORMULA COMPLETA KG', un: 'KG', cantidadAnterior: 1.00, valorUnitario: 3180.00 },
    { codigo: '01.01.05.004.00', nombre: 'QUESILLO KG', un: 'KG', cantidadAnterior: 1.44, valorUnitario: 4518.75 },
    { codigo: '01.01.05.053.00', nombre: 'QUESO GAUDA LAMINADO (B&I)', un: 'KG', cantidadAnterior: 3.50, valorUnitario: 5440.00 },
    { codigo: '01.08.01.048.00', nombre: 'REPOLLO MORADO KG', un: 'KG', cantidadAnterior: 0.50, valorUnitario: 1410.00 },
    { codigo: '01.21.01.026.00', nombre: 'SAL DE MESA KG', un: 'KG', cantidadAnterior: 2.00, valorUnitario: 175.00 },
    { codigo: '01.21.01.048.00', nombre: 'SAL SACHET 1 GRS', un: 'UN', cantidadAnterior: 3000.00, valorUnitario: 1.99 },
    { codigo: '01.21.03.011.00', nombre: 'SALSA ESPAÑOLA KG', un: 'KG', cantidadAnterior: 0.56, valorUnitario: 3384.44 },
    { codigo: '01.10.10.002.00', nombre: 'SALSA LIQUIDA DE FRAMBUESA', un: 'LT', cantidadAnterior: 1.00, valorUnitario: 1700.00 },
    { codigo: '01.21.03.014.00', nombre: 'SALSA SOYA LT', un: 'LT', cantidadAnterior: 1.50, valorUnitario: 927.17 },
    { codigo: '01.21.04.032.00', nombre: 'SOPA CARACOLITOS', un: 'KG', cantidadAnterior: 1.00, valorUnitario: 1698.00 },
    { codigo: '01.21.04.004.00', nombre: 'SOPA CARNE CON VERDURAS K', un: 'KG', cantidadAnterior: 1.00, valorUnitario: 1687.71 },
    { codigo: '01.21.04.012.00', nombre: 'SOPA DE CARNE C/ ARROZ KG', un: 'KG', cantidadAnterior: 0.86, valorUnitario: 1698.00 },
    { codigo: '01.21.04.019.00', nombre: 'SOPA DE CARNE C/ FIDEOS (DES', un: 'KG', cantidadAnterior: 1.00, valorUnitario: 1698.00 },
    { codigo: '01.21.04.013.00', nombre: 'SOPA DE POLLO C/ ARROZ KG', un: 'KG', cantidadAnterior: 1.00, valorUnitario: 1698.00 },
    { codigo: '01.21.04.018.00', nombre: 'SOPA DE POLLO C/SEMOLA (DES', un: 'KG', cantidadAnterior: 0.53, valorUnitario: 1698.00 },
    { codigo: '01.21.04.001.00', nombre: 'SOPA DE POLLO CON VERDURAS', un: 'KG', cantidadAnterior: 1.00, valorUnitario: 1698.00 },
    { codigo: '01.01.14.014.00', nombre: 'SUCEDANEO DE LECHE 26%', un: 'KG', cantidadAnterior: 0.33, valorUnitario: 3280.00 },
    { codigo: '01.08.01.019.00', nombre: 'TOMATE PRIMERA KG', un: 'KG', cantidadAnterior: 1.55, valorUnitario: 1350.00 },
    { codigo: '01.21.01.038.00', nombre: 'VINAGRE ROSADO LT', un: 'LT', cantidadAnterior: 2.00, valorUnitario: 484.80 },
    { codigo: '01.12.01.001.00', nombre: 'VINO BLANCO TETRA LT', un: 'LT', cantidadAnterior: 0.70, valorUnitario: 1419.00 },
    { codigo: '01.12.01.003.00', nombre: 'VINO TINTO TETRA LT', un: 'LT', cantidadAnterior: 1.00, valorUnitario: 1419.00 },
    { codigo: '01.01.09.002.00', nombre: 'YOGURT BATIDO FRUTILLA (LT)', un: 'LT', cantidadAnterior: 1.00, valorUnitario: 1000.00 },
    { codigo: '01.01.09.006.00', nombre: 'YOGURT BATIDO FRUTILLA 110 G', un: 'UN', cantidadAnterior: 144.00, valorUnitario: 153.00 },
    { codigo: '01.01.09.082.00', nombre: 'YOGURT BATIDO PIÑA 110 GRS', un: 'UN', cantidadAnterior: 24.00, valorUnitario: 153.00 },
    { codigo: '01.01.09.059.00', nombre: 'YOGURT BATIDO PLATANO 110', un: 'UN', cantidadAnterior: 129.00, valorUnitario: 153.00 },
    { codigo: '01.01.09.022.00', nombre: 'YOGURT BATIDO VAINILLA 110 G', un: 'UN', cantidadAnterior: 79.00, valorUnitario: 153.00 },
    { codigo: '01.08.01.020.00', nombre: 'ZANAHORIA KG', un: 'KG', cantidadAnterior: 1.00, valorUnitario: 1200.18 },
    { codigo: '01.08.01.021.00', nombre: 'ZAPALLO CAMOTE KG', un: 'KG', cantidadAnterior: 5.50, valorUnitario: 772.97 },
    { codigo: '03.02.01.037.00', nombre: 'ALUSA PLAST ( 30 X 1400 MT)', un: 'UN', cantidadAnterior: 3.00, valorUnitario: 21895.16 },
    { codigo: '03.02.01.019.00', nombre: 'BOLSA CAMISETA 32 X 40 UN', un: 'BL', cantidadAnterior: 100.00, valorUnitario: 5.90 },
    { codigo: '03.02.01.005.00', nombre: 'BOLSA CUBIERTO (15 x 25 CM) K', un: 'KG', cantidadAnterior: 2.00, valorUnitario: 3989.83 },
    { codigo: '03.02.01.052.00', nombre: 'BOLSA DE BASURA 90 x 120', un: 'UN', cantidadAnterior: 90.00, valorUnitario: 149.00 },
    { codigo: '03.04.01.159.00', nombre: 'CLEAN & SAFE LIMPIADOR SANITI', un: 'LT', cantidadAnterior: 5.00, valorUnitario: 1747.20 },
    { codigo: '03.04.02.066.00', nombre: 'CLORODOS PLUS SANITIZANTE S', un: 'LT', cantidadAnterior: 1.00, valorUnitario: 5484.00 },
    { codigo: '03.03.03.036.00', nombre: 'ESCOBILLON ECOLOGICO VIRUTE', un: 'UN', cantidadAnterior: 1.00, valorUnitario: 1500.00 },
    { codigo: '03.03.04.008.00', nombre: 'ESPONJA ABRASIVA PARRILLA', un: 'UN', cantidadAnterior: 18.00, valorUnitario: 1216.67 },
    { codigo: '03.03.04.003.00', nombre: 'ESPONJA BONOBRIL', un: 'UN', cantidadAnterior: 4.00, valorUnitario: 90.00 },
    { codigo: '03.04.02.067.00', nombre: 'FOODGUARD SANITIZANTE FYV', un: 'LT', cantidadAnterior: 2.00, valorUnitario: 10638.00 },
    { codigo: '03.04.01.160.00', nombre: 'GLEE DESENGRASANTE FUERTE', un: 'LT', cantidadAnterior: 1.00, valorUnitario: 3346.00 },
    { codigo: '03.04.01.161.00', nombre: 'GLEE DESENGRAZANTE LAVALO', un: 'LT', cantidadAnterior: 5.00, valorUnitario: 2136.40 },
    { codigo: '03.02.04.003.00', nombre: 'GORRO CLIP DESECHABLE', un: 'UN', cantidadAnterior: 200.00, valorUnitario: 37.25 },
    { codigo: '03.04.01.072.00', nombre: 'GREASE CUTTER PLUS', un: 'LT', cantidadAnterior: 1.00, valorUnitario: 3199.00 },
    { codigo: '03.02.04.005.00', nombre: 'GUANTE LATEX PAR', un: 'UN', cantidadAnterior: 1.00, valorUnitario: 420.00 },
    { codigo: '03.04.02.068.00', nombre: 'JABON HIGIENIZANTE LT', un: 'LT', cantidadAnterior: 1.00, valorUnitario: 3027.66 },
    { codigo: '03.03.01.003.00', nombre: 'JABON POPEYE 140 GRS', un: 'UN', cantidadAnterior: 2.00, valorUnitario: 360.00 },
    { codigo: '03.02.04.002.00', nombre: 'MASCARILLAS DESECHABLES', un: 'UN', cantidadAnterior: 200.00, valorUnitario: 26.17 },
    { codigo: '03.01.01.002.00', nombre: 'PAPEL HIGIENICO 1X 500 MTS', un: 'UN', cantidadAnterior: 2.00, valorUnitario: 1547.00 },
    { codigo: '03.03.04.009.00', nombre: 'PAÑO ABRASIVO VERDE UN', un: 'UN', cantidadAnterior: 17.00, valorUnitario: 1212.69 },
    { codigo: '03.03.04.005.00', nombre: 'PAÑO AMARILLO', un: 'UN', cantidadAnterior: 2.00, valorUnitario: 160.00 },
    { codigo: '03.04.01.069.00', nombre: 'POT & PAN ALL PURPOSE LT', un: 'LT', cantidadAnterior: 14.00, valorUnitario: 2578.00 },
    { codigo: '03.04.02.069.00', nombre: 'SANIDRY ALCOHOL GEL SIN ARO', un: 'LT', cantidadAnterior: 2.00, valorUnitario: 4168.40 },
    { codigo: '03.01.01.021.00', nombre: 'SERVILLETA COCTEL 22 x 23.5 C', un: 'UN', cantidadAnterior: 5930.00, valorUnitario: 2.49 },
    { codigo: '03.01.01.003.00', nombre: 'TOALLA DE PAPEL BLANCA 1x 2', un: 'UN', cantidadAnterior: 1.00, valorUnitario: 2501.50 },
    { codigo: '03.03.03.005.00', nombre: 'TRAPERO DOBLE C/ OJAL 50 X 50', un: 'UN', cantidadAnterior: 15.00, valorUnitario: 678.13 }

   
];

//ordenar alfabeticamente
inventario.sort((a, b) => a.nombre.localeCompare(b.nombre));

const tabla = document.getElementById('inventario').getElementsByTagName('tbody')[0];

// Funciones de cálculo
const calcularValorTotal = () => {
    return Array.from(document.querySelectorAll('#inventario tbody tr')).reduce((total, row) => {
        const cantidadActual = parseFloat(row.cells[4].querySelector('input').value) || 0;
        const valorUnitario = parseFloat(row.cells[6].textContent.replace('$', '').replace(',', ''));
        return total + (cantidadActual * valorUnitario);
    }, 0);
};

const calcularValorTotalDiferencias = () => {
    return Array.from(document.querySelectorAll('#inventario tbody tr')).reduce((total, row) => {
        const diferencia = parseFloat(row.cells[5].textContent) || 0;
        const valorUnitario = parseFloat(row.cells[6].textContent.replace('$', '').replace(',', ''));
        return total + (diferencia * valorUnitario);
    }, 0);
};

// Crear elementos de totales
const crearElementosTotales = () => {
    const valorTotalElement = document.createElement('p');
    valorTotalElement.textContent = `Valor Total del Inventario: $${calcularValorTotal().toLocaleString('es-CL')}`;
    valorTotalElement.style.textAlign = 'right';
    
    const valorTotalDiferenciasElement = document.createElement('p');
    valorTotalDiferenciasElement.textContent = `Valor Total de Diferencias: $${calcularValorTotalDiferencias().toLocaleString('es-CL')}`;
    
    document.body.insertBefore(valorTotalElement, document.body.firstChild);
    document.body.insertBefore(valorTotalDiferenciasElement, document.body.firstChild);
};

// Llenar tabla
inventario.forEach(producto => {
    const fila = tabla.insertRow();
    fila.insertCell(0).textContent = producto.codigo;
    fila.insertCell(1).textContent = producto.nombre;
    fila.insertCell(2).textContent = producto.un;
    fila.insertCell(3).textContent = producto.cantidadAnterior;
    
    const cantidadActualCell = fila.insertCell(4);
    const inputCantidad = document.createElement('input');
    inputCantidad.type = 'number';
    inputCantidad.value = 0;
    
    inputCantidad.addEventListener('input', () => {
        const cantidadActual = parseFloat(inputCantidad.value) || 0;
        const diferencia = cantidadActual - producto.cantidadAnterior;
        fila.cells[5].textContent = diferencia;
        
        document.querySelectorAll('p').forEach(p => p.remove());
        crearElementosTotales();
    });
    
    cantidadActualCell.appendChild(inputCantidad);
    fila.insertCell(5).textContent = 0;
    fila.insertCell(6).textContent = producto.valorUnitario;
});

crearElementosTotales();

// Event Listeners
document.getElementById('guardar').addEventListener('click', () => {
    alert('Inventario guardado correctamente.');
});

document.getElementById('descargar').addEventListener('click', () => {
    const wb = XLSX.utils.book_new();
    const ws_data = [
        ["Código", "Nombre", "UN", "Cantidad Anterior", "Cantidad Actual", "Diferencias"],
        ...Array.from(document.querySelectorAll('#inventario tbody tr')).map(row => {
            const cells = row.cells;
            const cantidadActual = parseFloat(cells[4].querySelector('input').value) || 0;
            const diferencia = cantidadActual - parseFloat(cells[3].textContent);
            return [
                cells[0].textContent,
                cells[1].textContent,
                cells[2].textContent,
                cells[3].textContent,
                cantidadActual,
                diferencia
            ];
        })
    ];
    
    const ws = XLSX.utils.aoa_to_sheet(ws_data);
    XLSX.utils.book_append_sheet(wb, ws, "Inventario");
    XLSX.writeFile(wb, "inventario.xlsx");
});

// Add currency symbol to Valor Unitario
Array.from(document.querySelectorAll('#inventario tbody tr')).forEach(row => {
    const valorUnitarioCell = row.cells[6];
    const valorUnitario = parseFloat(valorUnitarioCell.textContent);
    valorUnitarioCell.textContent = `$${valorUnitario.toLocaleString('es-CL')}`;
});

// Align Valor Unitario to the right
Array.from(document.querySelectorAll('#inventario tbody tr')).forEach(row => {
    const valorUnitarioCell = row.cells[6];
    valorUnitarioCell.style.textAlign = 'right';
});

// Save data to localStorage
const saveDataToLocalStorage = () => {
    const data = Array.from(document.querySelectorAll('#inventario tbody tr')).map(row => {
        const cells = row.cells;
        const cantidadActual = parseFloat(cells[4].querySelector('input').value) || 0;
        const diferencia = cantidadActual - parseFloat(cells[3].textContent);
        return {
            codigo: cells[0].textContent,
            nombre: cells[1].textContent,
            un: cells[2].textContent,
            cantidadAnterior: parseFloat(cells[3].textContent),
            cantidadActual: cantidadActual,
            diferencia: diferencia,
            valorUnitario: parseFloat(cells[6].textContent.replace('$', '').replace(',', ''))
        };
    });
    localStorage.setItem('inventarioData', JSON.stringify(data));
};

// Load data from localStorage
const loadDataFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem('inventarioData'));
    if (data) {
        data.forEach((producto, index) => {
            const row = tabla.rows[index];
            row.cells[4].querySelector('input').value = producto.cantidadActual;
            row.cells[5].textContent = producto.diferencia;
        });
        document.querySelectorAll('p').forEach(p => p.remove());
        crearElementosTotales();
    }
};

// Save data on input change
Array.from(document.querySelectorAll('#inventario tbody tr input')).forEach(input => {
    input.addEventListener('input', saveDataToLocalStorage);
});

// Load data on page load
window.addEventListener('load', loadDataFromLocalStorage);

// Clear data from localStorage and reset inputs
const clearData = () => {
    localStorage.removeItem('inventarioData');
    Array.from(document.querySelectorAll('#inventario tbody tr')).forEach(row => {
        row.cells[4].querySelector('input').value = 0;
        row.cells[5].textContent = 0;
    });
    document.querySelectorAll('p').forEach(p => p.remove());
    crearElementosTotales();
};

// Create and add the "Borrar historial" button
const borrarHistorialButton = document.createElement('button');
borrarHistorialButton.textContent = 'Borrar historial';
borrarHistorialButton.addEventListener('click', clearData);
document.body.insertBefore(borrarHistorialButton, document.body.firstChild);