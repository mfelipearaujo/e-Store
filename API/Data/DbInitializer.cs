using API.Entities;

namespace API.Data;
public class DbInitializer
{
    public static void Initializer(StoreContext context)
    {
        if (context.Products.Any()) return;

        var products = new List<Product>
        {
            new Product
            {
                Name = "MacBook Air 13 pol. (chip M2) Prateado",
                Description = "CPU de 8 núcleos, GPU de 8 núcleos, Memória unificada de 8 GB, SSD de 256 GB",
                Price = 1099900,
                PictureUrl = "/images/products/mba13-m2-silver.png",
                Brand = "Apple",
                Type = "Laptops",
                QuantityInStock = 10
            },
            new Product
            {
                Name = "MacBook Air 13 pol. (chip M3) Cinza-espacial",
                Description = "CPU de 8 núcleos, GPU de 8 núcleos, Memória unificada de 8 GB, SSD de 256 GB",
                Price = 1249900,
                PictureUrl = "/images/products/mba13-m3-spacegray.png",
                Brand = "Apple",
                Type = "Laptops",
                QuantityInStock = 10
            },
            new Product
            {
                Name = "MacBook Pro 14 pol. (chip M3 Max) Prateado",
                Description = "CPU de 14 núcleos, GPU de 30 núcleos, Memória unificada de 36 GB, SSD de 1 TB",
                Price = 3499900,
                PictureUrl = "/images/products/mbp14-m3-max-pro-silver.png",
                Brand = "Apple",
                Type = "Laptops",
                QuantityInStock = 10
            }
        };

        context.Products.AddRange(products);

        context.SaveChanges();
    }
}
