# LPF-Product-Card

Este es un paquete de pruebas de despliegue en npm

### Luis Emilio Piña Flores

### Ejemplo
```
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "lpf-product-card";
```
```
<ProductCard
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10
    }}
>
    {
        ( {reset,isMaxCountReached, handleIncreaseBy, count} ) => (
            <>
                <ProductImage/>
                <ProductTitle/>
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```