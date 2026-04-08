
var allProducts = {
    BeautyProducts: {
        skincare: {
            ponds: {
                lotion: {
                    name: "ponds moisturizing lotion",
                    price: 500,
                    src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
                    description: "POND'S Moisturising Lotion is a light, non-greasy lotion that gives you silky smooth skin. Its unique formulation is enriched with vitamins that soften your skin."
                },
                "face wash": {
                    name: "ponds face wash",
                    price: 1500,
                    src: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b",
                    description: "POND'S face wash is a light, non-greasy lotion that gives you silky smooth skin. Its unique formulation is enriched with vitamins that soften your skin."
                },
                "vanishing cream": {
                    name: "ponds vanishing cream",
                    price: 2500,
                    src: "https://images.unsplash.com/photo-1556228578-8c89e6adf883",
                    description: "POND'S vanishing cream is a light, non-greasy lotion that gives you silky smooth skin. Its unique formulation is enriched with vitamins that soften your skin."
                }
            },

            vaseline: {
                lotion: {
                    name: "vaseline moisturizing lotion",
                    price: 500,
                    src: "https://images.unsplash.com/photo-1612817288484-6f916006741a",
                    description: "vaseline'S Moisturising Lotion is a light, non-greasy lotion that gives you silky smooth skin. Its unique formulation is enriched with vitamins that soften your skin."
                },
                "face wash": {
                    name: "vaseline face wash",
                    price: 1500,
                    src: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273",
                    description: "vaseline'S face wash is a light, non-greasy lotion that gives you silky smooth skin. Its unique formulation is enriched with vitamins that soften your skin."
                },
                "vanishing cream": {
                    name: "vaseline vanishing cream",
                    price: 2500,
                    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
                    description: "vaseline'S vanishing cream is a light, non-greasy lotion that gives you silky smooth skin. Its unique formulation is enriched with vitamins that soften your skin."
                }
            },

            "saeed ghani": {
                lotion: {
                    name: "saeed ghani moisturizing lotion",
                    price: 500,
                    src: "https://saeedghani.pk/cdn/shop/files/VitCLotion.webp?v=1771230896",
                    description: "saeed ghani'S Moisturising Lotion is a light, non-greasy lotion that gives you silky smooth skin. Its unique formulation is enriched with vitamins that soften your skin."
                },
                "face wash": {
                    name: "saeed ghani face wash",
                    price: 1500,
                    src: "https://saeedghani.pk/cdn/shop/files/VitaminCF-W.webp?v=1759693819",
                    description: "saeed ghani'S face wash is a light, non-greasy lotion that gives you silky smooth skin. Its unique formulation is enriched with vitamins that soften your skin."
                },
                "vanishing cream": {
                    name: "saeed ghani vanishing cream",
                    price: 2500,
                    src: "https://images.unsplash.com/photo-1619451334792-150fd785ee74",
                    description: "saeed ghani'S vanishing cream is a light, non-greasy lotion that gives you silky smooth skin. Its unique formulation is enriched with vitamins that soften your skin."
                }
            }
        },

        nailcare: {
            "Nail It by Masarrat Misbah": {
                "nail polish red": {
                    name: "Nail It Red Elegance",
                    price: 450,
                    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371",
                    description: "Long-lasting, chip-resistant red nail polish with a glossy finish."
                },
                "nail hardener": {
                    name: "Nail It Strengthener",
                    price: 350,
                    src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702",
                    description: "Strengthens brittle nails and prevents breakage."
                }
            },

            "ST London": {
                "gel top coat": {
                    name: "ST London Gel Top Coat",
                    price: 550,
                    src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b",
                    description: "Salon-quality gel top coat for a shiny, long-lasting finish."
                },
                "cuticle oil": {
                    name: "ST London Cuticle Oil",
                    price: 300,
                    src: "https://m.media-amazon.com/images/I/31ruD7VwPHL._SX342_SY445_QL70_FMwebp_.jpg",
                    description: "Nourishing cuticle oil with vitamin E."
                }
            },
        },

        haircare: {
            "pantene": {
                "shampoo": {
                    name: "Pantene Pro-V Shampoo",
                    price: 450,
                    src: "https://images.unsplash.com/photo-1526947425960-945c6e72858f",
                    description: "Repairs damage and strengthens hair with Pro-V nutrients."
                },
                "conditioner": {
                    name: "Pantene Pro-V Conditioner",
                    price: 450,
                    src: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc",
                    description: "Silky smooth conditioner that detangles and moisturizes."
                },
                "hair serum": {
                    name: "Pantene Hair Serum",
                    price: 600,
                    src: "https://m.media-amazon.com/images/I/61d4vy1vIFL._AC_UL320_.jpg",
                    description: "Frizzy hair serum for smooth, shiny hair."
                }
            },
            "dove": {
                "shampoo": {
                    name: "Dove Intense Repair Shampoo",
                    price: 500,
                    src: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
                    description: "Repairs damaged hair and restores natural softness."
                },
                "conditioner": {
                    name: "Dove Intense Repair Conditioner",
                    price: 500,
                    src: "https://m.media-amazon.com/images/I/71d34NT4tOL._AC_UL320_.jpg",
                    description: "Deep conditioning for smooth, manageable hair."
                }
            }
        },

        makeup: {
            "maybelline": {
                "foundation": {
                    name: "Maybelline Fit Me Foundation",
                    price: 1200,
                    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
                    description: "Natural, matte finish foundation that blends perfectly."
                },
                "lipstick": {
                    name: "Maybelline Superstay Lipstick",
                    price: 850,
                    src: "https://images.unsplash.com/photo-1586495777744-4413f21062fa",
                    description: "24-hour wear liquid lipstick in matte finish."
                },
                "mascara": {
                    name: "Maybelline Lash Sensational Mascara",
                    price: 950,
                    src: "https://images.unsplash.com/photo-1631214540553-ff044a3ff1d4",
                    description: "Volumizing mascara for full, dramatic lashes."
                }
            },

            "loreal": {
                "concealer": {
                    name: "L'Oreal Infallible Concealer",
                    price: 750,
                    src: "https://m.media-amazon.com/images/I/618A-1FVfxL._AC_UL320_.jpg",
                    description: "Full coverage concealer for dark circles and blemishes."
                },
                "eyeliner": {
                    name: "L'Oreal Matte Signature Eyeliner",
                    price: 650,
                    src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
                    description: "Intense black matte liquid eyeliner."
                }
            }
        },
    },

    ElectronicItems: {
        mobiles: {
            "samsung": {
                "galaxy a14": {
                    name: "Samsung Galaxy A14",
                    price: 45000,
                    src: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
                    description: "6.6-inch display, 50MP camera, 5000mAh battery."
                },
                "galaxy s23": {
                    name: "Samsung Galaxy S23",
                    price: 180000,
                    src: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
                    description: "Flagship smartphone with Snapdragon 8 Gen 2, 120Hz AMOLED."
                }
            },
            "iphone": {
                "iphone 14": {
                    name: "Apple iPhone 14",
                    price: 220000,
                    src: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c",
                    description: "A15 Bionic chip, 6.1-inch Super Retina XDR display."
                },
                "iphone 13": {
                    name: "Apple iPhone 13",
                    price: 170000,
                    src: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5",
                    description: "A15 Bionic, dual-camera system, battery life all day."
                }
            },
        },
        laptops: {
            "dell": {
                "xps 15": {
                    name: "Dell XPS 15",
                    price: 250000,
                    src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
                    description: "15.6-inch 3.5K OLED, Intel i7, 16GB RAM, 512GB SSD."
                },
                "inspiron 15": {
                    name: "Dell Inspiron 15",
                    price: 120000,
                    src: "https://m.media-amazon.com/images/I/71sDfZObAmL._AC_UY218_.jpg",
                    description: "Affordable laptop for everyday use, Intel i5, 8GB RAM."
                }
            },

            "hp": {
                "spectre x360": {
                    name: "HP Spectre x360",
                    price: 200000,
                    src: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef",
                    description: "Convertible laptop with touchscreen, Intel i7, 16GB RAM."
                },
                "pavilion 15": {
                    name: "HP Pavilion 15",
                    price: 110000,
                    src: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
                    description: "Reliable performance for work and entertainment."
                }
            },
        },
        audio: {
            "sony": {
                "wh1000xm5": {
                    name: "Sony WH-1000XM5",
                    price: 55000,
                    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
                    description: "Industry-leading noise canceling headphones."
                },
                "wf1000xm4": {
                    name: "Sony WF-1000XM4",
                    price: 40000,
                    src: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46",
                    description: "True wireless earbuds with exceptional noise cancellation."
                }
            },

            "apple": {
                "airpods pro 2": {
                    name: "Apple AirPods Pro 2",
                    price: 65000,
                    src: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434",
                    description: "Active noise cancellation, spatial audio, MagSafe charging."
                }
            }
        },
    },
    Accessories: {
        "watches": {
            "casio": {
                "g shock": {
                    name: "Casio G-Shock",
                    price: 12000,
                    src: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
                    description: "Shock resistant, water resistant, digital display."
                },
                "vintage": {
                    name: "Casio Vintage Digital",
                    price: 4500,
                    src: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6",
                    description: "Retro stainless steel digital watch."
                }
            },
            "fossil": {
                "gen 5": {
                    name: "Fossil Gen 5 Smartwatch",
                    price: 25000,
                    src: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
                    description: "Wear OS smartwatch with heart rate and GPS."
                },
                "chronograph": {
                    name: "Fossil Chronograph Watch",
                    price: 30000,
                    src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
                    description: "Classic chronograph watch for timeless style."
                },
                "hybrid smartwatch": {
                    name: "Fossil Hybrid Smartwatch",
                    price: 20000,
                    src: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
                    description: "Analog watch with smart features and long battery life."
                },
                "sport watch": {
                    name: "Fossil Sport Watch",
                    price: 22000,
                    src: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
                    description: "Lightweight smartwatch designed for fitness and activity tracking."
                }
            },
            "bags": {
                "backpacks": {
                    "school backpack": {
                        name: "Casual School Backpack",
                        price: 2000,
                        src: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa",
                        description: "Multi-compartment backpack for college/office."
                    },
                    "laptop backpack": {
                        name: "Laptop Backpack",
                        price: 3500,
                        src: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3",
                        description: "Padded compartment for 15.6-inch laptop, water-resistant."
                    },
                    "designer backpack": {
                        name: "Designer Backpack",
                        price: 15000,
                        src: "https://m.media-amazon.com/images/I/71i9Pxe1INL._AC_UL320_.jpg",
                        description: "Luxury backpack with premium materials and craftsmanship."
                    }

                },
                "handbags": {
                    "tote bag": {
                        name: "Classic Tote Bag",
                        price: 2500,
                        src: "https://m.media-amazon.com/images/I/713Q4cAWaPL._AC_UL320_.jpg",
                        description: "Spacious tote bag for everyday use."
                    },
                    "crossbody bag": {
                        name: "Crossbody Bag",
                        price: 3000,
                        src: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
                        description: "Compact crossbody bag with adjustable strap."
                    },
                    "clutch": {
                        name: "Evening Clutch",
                        price: 5000,
                        src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
                        description: "Elegant clutch bag for formal occasions."
                    },
                    "satchel": {
                        name: "Satchel Bag",
                        price: 4000,
                        src: "https://m.media-amazon.com/images/I/61+MNfbNk3L._AC_UL320_.jpg",
                        description: "Classic satchel bag for everyday use."
                    }

                }

            }
        },
    }
};


var shop = document.getElementById("allProducts")
for (var category in allProducts){
    //console.log(allProducts[category]);
    for (var subcategory in allProducts[category]){
        //console.log(allProducts[category][subcategory]);
        for (var brand in allProducts[category][subcategory]){
            //    console.log(allProducts[category][subcategory][brand]);
            for (var product in allProducts[category][subcategory][brand]){
                console.log(allProducts[category][subcategory][brand][product].name);

shop.innerHTML += `<div class="col-md-4 mb-4">
            <div class="card h-100 imgcar">
              <img src="${allProducts[category][subcategory][brand][product].src}" class="card-img-top" alt="${product.name}">
              <div class="card-body">
                <h5 class="card-title">${allProducts[category][subcategory][brand][product].name}</h5>
                <p class="card-text">${allProducts[category][subcategory][brand][product].description}</p>
               </div>
              <div class="card-footer product-card-footer d-flex flex-column gap-3">
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-body-secondary price">Price: ${allProducts[category][subcategory][brand][product].price}/-</small>
                </div>
                <button type="button" class="btn btn-cart">Add to Cart</button>
              </div>
            </div>
           </div>`
            }
        }
    }
}







var productMenu = document.getElementById("productMenu")
var brandMenu = document.getElementById("brandMenu")
for (var product in allProducts)
    // console.log(product);
    productMenu.innerHTML += `<option value="${product}">${product}</option>`

function productChange() {
    brandMenu.innerHTML = `<option value="">Select item</option>`
    for (var brand in allProducts[productMenu.value])
        // console.log(brand);
        brandMenu.innerHTML += `<option value="${brand}">${brand}</option>`
}





//             function loadCategories() {
//                 let productMenu = document.getElementById('productMenu');
// if (!productMenu) return;
// productMenu.innerHTML = '<option value="">Select Category</option>';
// for (let category in allProducts) {
//     let option = document.createElement('option');
//     option.value = category;
//     option.textContent = category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1');
//     productMenu.appendChild(option);
// }
// }

// function productChange() {
//     let selectedCategory = document.getElementById('productMenu').value;
//     let brandMenu = document.getElementById('brandMenu');
//     brandMenu.innerHTML = '<option value="">Select Brand</option>';
//     if (selectedCategory) {
//         let subcategories = allProducts[selectedCategory];
//         for (let sub in subcategories) {
//             let option = document.createElement('option');
//             option.value = sub;
//             option.textContent = sub.charAt(0).toUpperCase() + sub.slice(1).replace(/([A-Z])/g, ' $1');
//             brandMenu.appendChild(option);
//         }
//     }
//     displayProducts(selectedCategory, '');
// }

// function brandChange() {
//     let selectedCategory = document.getElementById('productMenu').value;
//     let selectedBrand = document.getElementById('brandMenu').value;
//     displayProducts(selectedCategory, selectedBrand);
// }

// function displayProducts(category, brand) {
//     let container = document.getElementById('allProducts');
//     if (!container) return;
//     container.innerHTML = '';
//     let productsToShow = [];
//     if (category && brand) {
//         let items = allProducts[category][brand];
//         for (let item in items) {
//             productsToShow.push(items[item]);
//         }
//     } else if (category) {
//         for (let sub in allProducts[category]) {
//             for (let br in allProducts[category][sub]) {
//                 for (let item in allProducts[category][sub][br]) {
//                     productsToShow.push(allProducts[category][sub][br][item]);
//                 }
//             }
//         }
//     } else {
//         for (let cat in allProducts) {
//             for (let sub in allProducts[cat]) {
//                 for (let br in allProducts[cat][sub]) {
//                     for (let item in allProducts[cat][sub][br]) {
//                         productsToShow.push(allProducts[cat][sub][br][item]);
//                     }
//                 }
//             }
//         }
//     }
//     productsToShow.forEach(product => {
//         let card = ``;
//         container.innerHTML += card;
//     });
// }

// // Load categories and display all products on page load
// if (document.getElementById('productMenu')) {
//     loadCategories();
//     displayProducts('', '');
// }

// (async () => {
//     await loadFireflyPreset(tsParticles);

//     await tsParticles.load({
//         id: "tsparticles",
//         options: {
//             preset: "firefly",
//             background: {
//                 color: "#C4C6C8"
//             }
//         },
//     });
// })();



function login() {

    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;


    if (name === "" || email === "" || password === "") {

        Swal.fire({
            icon: "error",
            title: "Fill all fields"
        });

    }

    else {

        Swal.fire({
            icon: "success",
            title: "Login Successful"
        });

    }

}