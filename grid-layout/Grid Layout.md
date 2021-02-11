# Grid Layout

## Propriedades
    * display
        -Define o elemento como um grid-container
```css
    display: grid;
    display: inline-grid;
    display: subgrid;
```

    * grid-template-columns
        -Define o número total de colunas que serão criadas no grid
```css
    grid-template-columns: 100px 100px 100px;  /*Três colunas de 100px são criadas*/

    grid-template-columns: 1fr 3fr 1fr; /* Três colunas, sendo que a segunda é 3 vezes maior*/

    grid-template-columns: minmax(200px, 1fr) 1fr 1fr; /*Tês colunas, a primeira tem um width de no máximo 200px e no mínimo 1fr em relação as outras colunas*/

    grid-template-columns: repeat(3, 1fr); /*3 colunas de 1fr*/

    grid-template-columns: repeat(auto-fit, 100px); /*Completa o espaço do container com colunas automaticamente*/
    grid-template-columns: repeat(auto-fit, minmax(100px, auto)); /* Coluna responsiva */

    grid-template-columns: repeat(auto-fill, minmax(100px, auto)); /* Coluna responsiva */
```

