var allProducts = {
    BeautyProducts: {
        skincare: {
            ponds: {
                lotion: {
                    name: "Ponds Moisturizing Lotion",
                    price: 500,
                    src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
                    description: "POND'S Moisturising Lotion is a light, non-greasy lotion that gives you silky smooth skin."
                },
                "face wash": {
                    name: "Ponds Face Wash",
                    price: 1500,
                    src: "https://m.media-amazon.com/images/I/510psnlNFXL._AC_UL320_.jpg",
                    description: "Deep cleansing face wash enriched with vitamins for a glowing look."
                },
                "vanishing cream": {
                    name: "Ponds Vanishing Cream",
                    price: 2500,
                    src: "https://m.media-amazon.com/images/I/71OgLKixULL._AC_UL320_.jpg",
                    description: "Traditional vanishing cream that controls oil and brightens skin."
                }
            },
            vaseline: {
                lotion: {
                    name: "Vaseline Moisturizing Lotion",
                    price: 500,
                    src: "https://images.unsplash.com/photo-1612817288484-6f916006741a",
                    description: "Vaseline Intensive Care for deeply hydrated and healthy-looking skin."
                },
                "face wash": {
                    name: "Vaseline Face Wash",
                    price: 1500,
                    src: "https://m.media-amazon.com/images/I/619TOx1cW7L._SY300_SX300_QL70_FMwebp_.jpg",
                    description: "Hydrating face wash that leaves skin feeling fresh and soft."
                },
                "vanishing cream": {
                    name: "Vaseline Vanishing Cream",
                    price: 2500,
                    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
                    description: "Fast-absorbing cream for a spot-less, matte finish."
                }
            },
            "saeed ghani": {
                lotion: {
                    name: "Saeed Ghani Moisturizing Lotion",
                    price: 500,
                    src: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19",
                    description: "Natural herbal formulation for long-lasting skin nourishment."
                },
                "face wash": {
                    name: "Saeed Ghani Face Wash",
                    price: 1500,
                    src: "https://m.media-amazon.com/images/I/71mbTX9gYpL._AC_UL320_.jpg",
                    description: "Herbal face wash with neem and lemon extracts."
                },
                "vanishing cream": {
                    name: "Saeed Ghani Vanishing Cream",
                    price: 2500,
                    src: "https://images.unsplash.com/photo-1619451334792-150fd785ee74",
                    description: "Ayurvedic vanishing cream for naturally bright skin."
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
                    src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53",
                    description: "Nourishing cuticle oil with vitamin E and essential oils."
                }
            }
        },

        haircare: {
            pantene: {
                shampoo: {
                    name: "Pantene Pro-V Shampoo",
                    price: 450,
                    src: "https://images.unsplash.com/photo-1526947425960-945c6e72858f",
                    description: "Repairs damage and strengthens hair with Pro-V nutrients."
                },
                conditioner: {
                    name: "Pantene Pro-V Conditioner",
                    price: 450,
                    src: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc",
                    description: "Silky smooth conditioner that detangles and moisturizes."
                },
                "hair serum": {
                    name: "Pantene Hair Serum",
                    price: 600,
                    src: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d",
                    description: "Frizzy hair serum for smooth, shiny hair."
                }
            },
            dove: {
                shampoo: {
                    name: "Dove Intense Repair Shampoo",
                    price: 500,
                    src: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
                    description: "Repairs damaged hair and restores natural softness."
                },
                conditioner: {
                    name: "Dove Intense Repair Conditioner",
                    price: 500,
                    src: "https://m.media-amazon.com/images/I/71d34NT4tOL._AC_UL320_.jpg",
                    description: "Deep conditioning for smooth, manageable hair."
                }
            }
        },

        makeup: {
            maybelline: {
                foundation: {
                    name: "Maybelline Fit Me Foundation",
                    price: 1200,
                    src: "https://m.media-amazon.com/images/I/71hZifnguxL._AC_UL320_.jpg",
                    description: "Natural, matte finish foundation that blends perfectly."
                },
                lipstick: {
                    name: "Maybelline Superstay Lipstick",
                    price: 850,
                    src: "https://m.media-amazon.com/images/I/71zKXhTsjRL._AC_UL320_.jpg",
                    description: "24-hour wear liquid lipstick in matte finish."
                },
                mascara: {
                    name: "Maybelline Lash Sensational Mascara",
                    price: 950,
                    src: "https://images.unsplash.com/photo-1631214540553-ff044a3ff1d4",
                    description: "Volumizing mascara for full, dramatic lashes."
                },
                eyeshadow: {
                    name: "Maybelline Eye Studio Shadow",
                    price: 650,
                    src: "https://m.media-amazon.com/images/I/81gkcoMvICL._AC_UL320_.jpg",
                    description: "Long-wearing eyeshadow in a variety of shades."
                }

            },
            loreal: {
                concealer: {
                    name: "L'Oreal Infallible Concealer",
                    price: 750,
                    src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
                    description: "Full coverage concealer for dark circles and blemishes."
                },
                eyeliner: {
                    name: "L'Oreal Matte Signature Eyeliner",
                    price: 650,
                    src: "https://m.media-amazon.com/images/I/71vpN54BqqL._AC_UL320_.jpg",
                    description: "Intense black matte liquid eyeliner."
                },
                blush: {
                    name: "L'Oreal True Match Blush",
                    price: 550,
                    src: "https://m.media-amazon.com/images/I/71T+6KCjoqL._AC_UL320_.jpg",
                    description: "Natural-looking blush for a healthy glow."
                },
                lipstick: {
                    name: "L'Oreal Color Riche Lipstick",
                    price: 550,
                    src: "https://m.media-amazon.com/images/I/71Mgr0dIV9L._SX466_.jpg",
                    description: "Rich, long-wearing lipstick in a variety of shades."
                }


            }
        }
    },
    Accessories: {

        watches: {
            rolex: {
                "submariner": {
                    name: "Rolex Submariner Date",
                    price: 3500000,
                    src: "https://m.media-amazon.com/images/I/712BY6k-jJL._AC_UL320_.jpg",
                    description: "Luxury diver's watch, waterproof to 300 meters, Oystersteel case."
                }
            },
            casio: {
                "g-shock ga-2100": {
                    name: "Casio G-Shock Carbon Core",
                    price: 35000,
                    src: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
                    description: "Thin, octagonal design. Shock resistant, 200M water resistance, and world time."
                }
            }, smartwatches: {
                "apple-watch-s9": {
                    name: "Apple Watch Series 9",
                    price: 145000,
                    src: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
                    description: "Advanced health sensors, crash detection, and the most powerful chip in an Apple watch."
                },
                "samsung-watch-6": {
                    name: "Galaxy Watch 6 Classic",
                    price: 85000,
                    src: "https://m.media-amazon.com/images/I/61E+cgUId3L._AC_UY218_.jpg",
                    description: "Rotating bezel, sleep tracking, and personalized HR zones for fitness enthusiasts."
                }
            },
            luxury: {
                "rolex-submariner": {
                    name: "Rolex Submariner Date",
                    price: 4500000,
                    src: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
                    description: "The ultimate diver's watch with Cerachrom bezel and luminous hour markers."
                },
                "tissot-prx": {
                    name: "Tissot PRX Powermatic 80",
                    price: 210000,
                    src: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7",
                    description: "Swiss-made automatic watch with a waffle dial and integrated steel bracelet."
                }
            }
        },
        bags: {
            backpacks: {
                "north face": {
                    name: "North Face Borealis",
                    price: 28000,
                    src: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
                    description: "Classic 28L backpack with a dedicated laptop compartment and bungee straps."
                },
                "jansport": {
                    name: "Jansport Classic",
                    price: 25000,
                    src: "https://m.media-amazon.com/images/I/81YH5LV0wdL._AC_UY218_.jpg",
                    description: "Timeless design with a spacious main compartment and adjustable shoulder straps."
                },
                "herschel": {
                    name: "Herschel Little America",
                    price: 35000,
                    src: "https://m.media-amazon.com/images/I/61owdQEs5iL._AC_UY218_.jpg",
                    description: "Timeless design with a spacious main compartment and adjustable shoulder straps."
                }
            },
            handbags: {
                "gucci": {
                    name: "Gucci Marmont Shoulder Bag",
                    price: 650000,
                    src: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
                    description: "Iconic Matelassé leather with Double G hardware. A timeless fashion statement."
                },
                "louis vuitton": {
                    name: "Louis Vuitton Speedy",
                    price: 120000,
                    src: "https://m.media-amazon.com/images/I/81pcRJ4lRFL._AC_UL320_.jpg",
                    description: "Classic design with monogrammed canvas and adjustable shoulder straps."
                },
                "chanel": {
                    name: "Chanel Classic Flap Bag",
                    price: 850000,
                    src: "https://m.media-amazon.com/images/I/71rmin7VqnL._AC_UL320_.jpg",
                    description: "Timeless design with quilted leather and iconic CC turn-lock closure."
                },
                "prada": {
                    name: "Prada Nylon Shoulder Bag",
                    price: 75000,
                    src: "https://m.media-amazon.com/images/I/61Kc+6nSSJL._AC_UL320_.jpg",
                    description: "Contemporary design with signature logo and adjustable shoulder straps."
                }
            }
        },
        Clothing: {
            lawn: {
                "gul-ahmed-lawn": {
                    name: "Gul Ahmed Summer Lawn 3PC",
                    price: 5500,
                    src: "https://faisalfabrics.pk/cdn/shop/products/DB-32003.jpg?v=1676273857",
                    description: "Premium quality summer lawn with digital printed dupatta and dyed trousers."
                },
                "khaadi-lawn": {
                    name: "Khaadi Printed Lawn",
                    price: 4800,
                    src: "https://pk.khaadi.com/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw26b4ff36/images/hi-res/ss104b_multi_1.jpg",
                    description: "Lightweight and breathable fabric with ethnic floral patterns, ideal for hot weather."
                },
                "sapphire-daily": {
                    name: "Sapphire Daily Wear 2PC",
                    price: 3500,
                    src: "https://www.crossstitch.pk/cdn/shop/files/21_f1d8b95c-8057-4f0c-bd10-7835de8d6f91.jpg?v=1722253723",
                    description: "Sophisticated minimalist prints on high-grade lawn fabric for everyday office use."
                }
            },
            pret_wear: {
                "cotton-kurta": {
                    name: "Embroidered Cotton Kurta",
                    price: 4200,
                    src: "https://generation.pk/cdn/shop/files/S24T6051_White_800x.jpg?v=1737109672",
                    description: "Ready-to-wear 100% pure cotton kurta with delicate thread work on neckline."
                },
                "silk-tunic": {
                    name: "Raw Silk Tunic",
                    price: 8500,
                    src: "https://almirah.com.pk/cdn/shop/products/al-lk-703.jpg?v=1745188565",
                    description: "Luxurious raw silk shirt with a modern cut, perfect for evening gatherings."
                },
                "chiffon-formal": {
                    name: "Embellished Chiffon Suit",
                    price: 12000,
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavvsrO3T8UKKcTurQxyhrajrOxkWBh62txw&s",
                    description: "Heavy formal chiffon 3-piece suit with sequence work and silk lining."
                }
            },
            winter_collection: {
                "khaddar-suit": {
                    name: "Classic Khaddar 3PC",
                    price: 4500,
                    src: "https://salitexonline.com/cdn/shop/files/0038__0001__12A5926.webp?v=1756817352",
                    description: "Hand-woven feel khaddar fabric to keep you warm and stylish during winter."
                },
                "linen-printed": {
                    name: "Printed Soft Linen",
                    price: 3800,
                    src: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
                    description: "Ultra-soft linen fabric with vibrant digital prints for a cozy winter look."
                }
            }
        },
        TailoringAccessories: {
            laces: {
                "shuttle-lace": {
                    name: "White Shuttle Lace (10 Yards)",
                    price: 450,
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKa36d8WQlqglcp3_7RGD-FQn5xhENgkfdCQ&s",
                    description: "Delicate cotton shuttle lace for shirt borders, sleeves, and dupatta finishing."
                },
                "milky-lace": {
                    name: "Premium Milky Lace",
                    price: 600,
                    src: "https://img.drz.lazcdn.com/g/kf/S4be75c37b23645f3a42e328ad3747dfda.jpg_720x720q80.jpg",
                    description: "Soft milky lace in intricate floral patterns, ideal for necklines and sleeves."
                },
                "crochet-lace": {
                    name: "Colored Crochet Lace",
                    price: 300,
                    src: "https://m.media-amazon.com/images/I/81v7WF9vqNL._AC_UL320_.jpg",
                    description: "Stylish crochet lace available in multiple colors for trendy suit designs."
                }
            },
            patches_and_bunches: {
                "embroidery-bunch": {
                    name: "Floral Neckline Bunch",
                    price: 1200,
                    src: "https://static-01.daraz.pk/p/2fb5988d08b385a938ea6347c1051517.jpg",
                    description: "Heavy embroidery bunch with tilla and thread work, easy to stitch on any fabric."
                },
                "net-patch": {
                    name: "Mirror Work Net Patch",
                    price: 850,
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfR1Uk9GvO3YCLeYSBsshG2VaLxJbw3C7Lw&s",
                    description: "Exquisite net patch with mirror work for sleeves or shirt daman."
                },
                "red-lace-bunch": {
                    name: "Red Rose Embroidery Set",
                    price: 950,
                    src: "https://i.pinimg.com/736x/6f/18/4f/6f184f1ef73b1cbe2b18a46ce1118618.jpg",
                    description: "Vibrant red lace bunches designed for koti or shirt front decoration."
                }
            },
            buttons_and_beads: {
                "pearl-buttons": {
                    name: "Fancy Pearl Buttons (Set of 6)",
                    price: 250,
                    src: "https://m.media-amazon.com/images/I/715Z+Ca3eFL._AC_UL320_.jpg",
                    description: "Elegant white pearl buttons for gala and sleeves styling."
                },
                "metal-buttons": {
                    name: "Golden Metal Buttons",
                    price: 400,
                    src: "https://m.media-amazon.com/images/I/81Q8sHmJFfL._AC_UL320_.jpg",
                    description: "Antique gold finish metal buttons for coats, kotis, and formal wear."
                }
            }
        },
        KidsSection: {
            outdoor_sports: {
                "cricket-set": {
                    name: "Complete Cricket Kit for Kids",
                    price: 3500,
                    src: "https://m.media-amazon.com/images/I/61JX3PCO0EL._AC_UL320_.jpg",
                    description: "Includes a lightweight wooden bat, soft tennis ball, and stumps for backyard play."
                },
                "football-pro": {
                    name: "Junior Football Size 4",
                    price: 1800,
                    src: "https://m.media-amazon.com/images/I/81zLTxWAueL._AC_UL320_.jpg",
                    description: "Durable stitched football designed for young players to practice their skills."
                },
                "badminton-set": {
                    name: "Kids Badminton Rackets",
                    price: 1500,
                    src: "https://m.media-amazon.com/images/I/71AICWKtbqL._AC_UL320_.jpg",
                    description: "Set of two lightweight rackets and shuttlecocks with a carrying bag."
                }
            },
            toys: {
                "remote-car": {
                    name: "High-Speed RC Racing Car",
                    price: 4500,
                    src: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f",
                    description: "Full-function remote control car with rechargeable batteries and sturdy tires."
                },
                "educational-blocks": {
                    name: "Building Blocks Set (100 pcs)",
                    price: 2200,
                    src: "https://images.unsplash.com/photo-1587654780291-39c9404d746b",
                    description: "Colorful interlocking blocks that help improve creativity and motor skills."
                }
            }
        },

        Jewellery: {
            rings: {
                "diamond-solitaire": {
                    name: "18K Gold Diamond Ring",
                    price: 120000,
                    src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
                    description: "Elegant 18-karat gold ring featuring a brilliant-cut solitaire diamond."
                },
                "silver-band": {
                    name: "Sterling Silver Couple Band",
                    price: 4500,
                    src: "https://m.media-amazon.com/images/I/71Xb9KE-vkL._AC_UL320_.jpg",
                    description: "Simple yet sophisticated 925 sterling silver band with a polished finish."
                }
            },
            necklaces: {
                "pendant-necklace": {
                    name: "Golden Heart Pendant",
                    price: 25000,
                    src: "https://m.media-amazon.com/images/I/418F9d6LBmL._AC_UL320_.jpg",
                    description: "Thin gold chain with a delicate heart-shaped pendant, perfect for gifting."
                },
                "pearl-necklace": {
                    name: "Natural Freshwater Pearl Set",
                    price: 15000,
                    src: "https://m.media-amazon.com/images/I/71mjkZTd8rL._AC_UL320_.jpg",
                    description: "Classic string of pearls with a silver clasp for a timeless, elegant look."
                }
            },
            earrings: {
                "gold-hoops": {
                    name: "22K Gold Hoop Earrings",
                    price: 45000,
                    src: "https://m.media-amazon.com/images/I/610L7HFBLhL._AC_UL320_.jpg",
                    description: "Traditional 22-karat gold hoops with a smooth texture and secure clasp."
                },
                "diamond-studs": {
                    name: "Diamond Stud Earrings",
                    price: 75000,
                    src: "https://m.media-amazon.com/images/I/61LY4w72W3L._AC_UL320_.jpg",
                    description: "Minimalist diamond studs that add a touch of sparkle to any outfit."
                }
            },
            bracelets: {
                "charm-bracelet": {
                    name: "Silver Charm Bracelet",
                    price: 8500,
                    src: "https://m.media-amazon.com/images/I/61orG5kVzwS._AC_UL320_.jpg",
                    description: "Customizable silver bracelet with various aesthetic charms and a lobster claw clasp."
                },
                "bangle-set": {
                    name: "Traditional Gold Bangles",
                    price: 180000,
                    src: "https://m.media-amazon.com/images/I/61UyMgmyAnL._AC_UL320_.jpg",
                    description: "Set of 4 beautifully engraved 22K gold bangles for festive occasions."
                }
            }
        }
    },
    ElectronicItems: {
        mobiles: {
            samsung: {
                "s24-ultra": {
                    name: "Samsung Galaxy S24 Ultra",
                    price: 395000,
                    src: "https://m.media-amazon.com/images/I/51A-Q4eMBxL._AC_UY218_.jpg",
                    description: "Titanium build, 200MP AI camera, 100x Space Zoom, and built-in S-Pen. 12GB RAM, 512GB Storage."
                },
                "s24-plus": {
                    name: "Samsung Galaxy S24 Plus",
                    price: 285000,
                    src: "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00",
                    description: "QHD+ Dynamic AMOLED 2X, 4900mAh battery, and powerful Exynos 2400 processor."
                },
                "z-fold-5": {
                    name: "Samsung Galaxy Z Fold 5",
                    price: 450000,
                    src: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7",
                    description: "Massive 7.6-inch foldable screen, perfect for productivity with Taskbar and multi-window support."
                },
                "z-flip-5": {
                    name: "Samsung Galaxy Z Flip 5",
                    price: 240000,
                    src: "https://m.media-amazon.com/images/I/71a-Klo9ZHL._AC_UY218_.jpg",
                    description: "Compact flip design with a large Flex Window cover screen and 'Hand-free' Selfie mode."
                },
                "a54-5g": {
                    name: "Samsung Galaxy A54 5G",
                    price: 145000,
                    src: "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00",
                    description: "Premium glass finish, IP67 water resistance, and 50MP No Shake Cam for stable videos."
                },
                "a34": {
                    name: "Samsung Galaxy A34",
                    price: 95000,
                    src: "https://m.media-amazon.com/images/I/612jJWCgFcL._AC_UY218_.jpg",
                    description: "6.6-inch Super AMOLED display with 120Hz refresh rate and 2-day battery life."
                },
                "m54": {
                    name: "Samsung Galaxy M54 5G",
                    price: 110000,
                    src: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
                    description: "Monster 6000mAh battery, 108MP main camera, and massive 6.7-inch display."
                }
            },
            iphone: {
                "15-pro-max": {
                    name: "Apple iPhone 15 Pro Max",
                    price: 485000,
                    src: "https://m.media-amazon.com/images/I/51hANpBRKwL._AC_UY218_.jpg",
                    description: "Aerospace-grade titanium, A17 Pro chip, Action button, and 5x Telephoto zoom camera."
                },
                "15-pro": {
                    name: "Apple iPhone 15 Pro",
                    price: 430000,
                    src: "https://images.unsplash.com/photo-1695048133142-1a20484d2569",
                    description: "Compact 6.1-inch titanium design with Pro-motion display and USB-C 3 support."
                },
                "15-plus": {
                    name: "Apple iPhone 15 Plus",
                    price: 340000,
                    src: "https://m.media-amazon.com/images/I/61E3eOImi2L._AC_UY218_.jpg",
                    description: "6.7-inch display, Dynamic Island, 48MP camera, and the longest battery life in an iPhone."
                },
                "15-standard": {
                    name: "Apple iPhone 15",
                    price: 310000,
                    src: "https://m.media-amazon.com/images/I/51PtFHUPjBL._AC_UY218_.jpg",
                    description: "New 48MP camera, color-infused glass back, and the versatile Dynamic Island."
                },
                "14-pro": {
                    name: "Apple iPhone 14 Pro",
                    price: 380000,
                    src: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c",
                    description: "A16 Bionic chip, Always-On display, and 48MP main camera for incredible detail."
                },
                "14-standard": {
                    name: "Apple iPhone 14",
                    price: 260000,
                    src: "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1",
                    description: "Powerful dual-camera system, Crash Detection, and industry-leading durability features."
                },
                "13-standard": {
                    name: "Apple iPhone 13",
                    price: 210000,
                    src: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5",
                    description: "A15 Bionic, Super Retina XDR display, and advanced Cinematic mode for professional videos."
                },
                "se-2022": {
                    name: "Apple iPhone SE (3rd Gen)",
                    price: 145000,
                    src: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a",
                    description: "Classic design with A15 Bionic performance and a high-quality single camera system."
                }
            }
        },
        laptops: {
            dell: {
                "xps-13": {
                    name: "Dell XPS 13",
                    price: 120000,
                    src: "https://m.media-amazon.com/images/I/71Nr-5xBFvL._AC_UY218_.jpg",
                    description: "Compact and powerful laptop with a stunning display and long battery life."
                },
                "inspiron-15": {
                    name: "Dell Inspiron 15",
                    price: 85000,
                    src: "https://m.media-amazon.com/images/I/71QBIlhTEjL._AC_UY218_.jpg",
                    description: "Affordable and reliable laptop for everyday use."
                },
                "g15-gaming": {
                    name: "Dell G15 Gaming Laptop",
                    price: 150000,
                    src: "https://m.media-amazon.com/images/I/81AybmU9GRL._AC_UY218_.jpg",
                    description: "Powerful gaming laptop with high-performance graphics and fast processing."
                }
            }
        },

        machines: {
            washingmachine: {
                "lg-front-load": {
                    name: "LG Front Load Washing Machine",
                    price: 85000,
                    src: "https://m.media-amazon.com/images/I/71LBbx2KjnL._AC_UY218_.jpg",
                    description: "Efficient front load washer with multiple wash programs and energy-saving features."

                },
                "samsung-top-load": {
                    name: "Samsung Top Load Washing Machine",
                    price: 75000,
                    src: "https://cubeonline.pk/cdn/shop/files/Untitledproject_89_896b2e89-4316-4b23-9fc7-2ea18b61fc6e__32251_zoom_700x.jpg?v=1729842381",
                    description: "Spacious top load washer with powerful cleaning performance and smart features."
                }
            }
        }
    }
};


var shop = document.getElementById("allProducts");
var productMenu = document.getElementById("productMenu");
var categoryMenu = document.getElementById("categoryMenu");
var sidebar = document.getElementById("sidebar");

if (shop && productMenu && categoryMenu && sidebar) {
    for (var category in allProducts) {
        //console.log(allProducts[category]);
        for (var subcategory in allProducts[category]) {
            //console.log(allProducts[category][subcategory]);
            for (var brand in allProducts[category][subcategory]) {
                //    console.log(allProducts[category][subcategory][brand]);
                for (var product in allProducts[category][subcategory][brand]) {
                    // console.log(allProducts[category][subcategory][brand][product].name);
                    shop.innerHTML += `
            <div class="card h-100 m-2 imgcar">
              <img src="${allProducts[category][subcategory][brand][product].src}" class="card-img-top" alt="${allProducts[category][subcategory][brand][product].name}">
              <div class="card-body">
                <h5 class="card-title">${allProducts[category][subcategory][brand][product].name}</h5>
                <p class="card-text">${allProducts[category][subcategory][brand][product].description}</p>
               </div>
              <div class="card-footer product-card-footer d-flex flex-column gap-3">
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-body-secondary price">Price: ${allProducts[category][subcategory][brand][product].price}/-</small>
                </div>
               <button type="button" onclick="chartbtn(this)" class="btn btn-cart"
                    data-name="${allProducts[category][subcategory][brand][product].name}"
                    data-price="${allProducts[category][subcategory][brand][product].price}"
                    data-src="${allProducts[category][subcategory][brand][product].src}"
                    data-description="${allProducts[category][subcategory][brand][product].description}">
               Add to Cart
               </button>
              </div>
            </div>`}
                }
            }
        }
    }







    for (var products in allProducts) {
        // console.log(products);
        productMenu.innerHTML += `
    <option value="${products}">${products}</option>
    `;
    }
function productChange() {
    if (!productMenu.value) {
        categoryMenu.innerHTML = `<option value="">Select Category</option>`;
        shop.innerHTML = "";
        sidebar.innerHTML = "";
        sidebar.style.display = "none";
        sidebar.classList.remove("sidebar-sticky");
        sidebar.classList.add("sidebar");
        return;
    }

    sidebar.style.display = "none";
    sidebar.classList.remove("sidebar-sticky");
    sidebar.classList.add("sidebar");
    categoryMenu.innerHTML = `<option value="">Select Category</option>`;
    shop.innerHTML = "";
    // console.log(allProducts[productMenu.value]);
    for (var categories in allProducts[productMenu.value]) {
        // console.log(allProducts[productMenu.value][categories]);
        categoryMenu.innerHTML += `<option value="${categories}">${categories}</option>`;
        for (var brands in allProducts[productMenu.value][categories]) {
            // console.log(allProducts[productMenu.value][categories][brands]);
            for (var items in allProducts[productMenu.value][categories][brands]) {
                // console.log(allProducts[productMenu.value][categories][brands][items]);
                var itemDetails = allProducts[productMenu.value][categories][brands][items]
                shop.innerHTML += `
            <div class="card h-100 m-2 imgcar">
              <img src="${itemDetails.src}" class="card-img-top" alt="${itemDetails.name}">
              <div class="card-body">
                <h5 class="card-title">${itemDetails.name}</h5>
                <p class="card-text">${itemDetails.description}</p>
               </div>
              <div class="card-footer product-card-footer d-flex flex-column gap-3">
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-body-secondary price">Price: ${itemDetails.price}/-</small>
                </div>
               <button type="button" onclick="chartbtn(this)" class="btn btn-cart"
                    data-name="${itemDetails.name}"
                    data-price="${itemDetails.price}"
                    data-src="${itemDetails.src}"
                    data-description="${itemDetails.description}">
                 Add to Cart
                  </button>
              </div>
            </div>`}
            }
        }
    }

function filterProduct() {
    if (!productMenu.value || !categoryMenu.value) {
        shop.innerHTML = "";
        sidebar.innerHTML = "";
        sidebar.style.display = "none";
        sidebar.classList.remove("sidebar-sticky");
        sidebar.classList.add("sidebar");
        return;
    }
    sidebar.innerHTML = "";
    sidebar.style.display = "block";
    sidebar.classList.remove("sidebar");
    sidebar.classList.add("sidebar-sticky");
    shop.innerHTML = "";
    // console.log(allProducts[productMenu.value][categoryMenu.value]);
    for (var brands in allProducts[productMenu.value][categoryMenu.value]) {
        // console.log(allProducts[productMenu.value][categoryMenu.value][brands]);
        sidebar.innerHTML += `<h5 onclick="filterBrands('${brands}')">${brands}</h5>`
        for (var items in allProducts[productMenu.value][categoryMenu.value][brands]) {
            // console.log(allProducts[productMenu.value][categoryMenu.value][brands][items]);
            var itemDetails = allProducts[productMenu.value][categoryMenu.value][brands][items]
            shop.innerHTML += `
            <div class="card h-100 m-2 imgcar">
              <img src="${itemDetails.src}" class="card-img-top" alt="${itemDetails.name}">
              <div class="card-body">
                <h5 class="card-title">${itemDetails.name}</h5>
                <p class="card-text">${itemDetails.description}</p>
               </div>
              <div class="card-footer product-card-footer d-flex flex-column gap-3">
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-body-secondary price">Price: ${itemDetails.price}/-</small>
                </div>
                <button type="button" onclick="chartbtn(this)" class="btn btn-cart"
                    data-name="${itemDetails.name}"
                    data-price="${itemDetails.price}"
                    data-src="${itemDetails.src}"
                    data-description="${itemDetails.description}">
               Add to Cart
               </button>
              </div>
            </div>`}
        }
    }

function filterBrands(brand) {
    if (!productMenu.value || !categoryMenu.value || !brand) {
        return;
    }
    shop.innerHTML = "";
    for (var items in allProducts[productMenu.value][categoryMenu.value][brand]) {
        // console.log(allProducts[productMenu.value][categoryMenu.value][brand][items]);
        var itemDetails = allProducts[productMenu.value][categoryMenu.value][brand][items]
        shop.innerHTML += `
            <div class="card h-100 m-2 imgcar">
              <img src="${itemDetails.src}" class="card-img-top" alt="${itemDetails.name}">
              <div class="card-body">
                <h5 class="card-title">${itemDetails.name}</h5>
                <p class="card-text">${itemDetails.description}</p>
               </div>
              <div class="card-footer product-card-footer d-flex flex-column gap-3">
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-body-secondary price">Price: ${itemDetails.price}/-</small>
                </div>
                <button type="button" onclick="chartbtn(this)" class="btn btn-cart"
                    data-name="${itemDetails.name}"
                    data-price="${itemDetails.price}"
                    data-src="${itemDetails.src}"
                    data-description="${itemDetails.description}">
                Add to Cart
               </button>
              </div>
            </div> `;
    }
}







function login(event) {

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
var allProductsArray = []
function createCard(product) {
    var index = allProductsArray.length;
    allProductsArray.push(product);
    return `
   <div class="card h-100 m-2 imgcar">
              <img src="${product.src}" class="card-img-top" alt="${product.name}">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
               </div>
              <div class="card-footer product-card-footer d-flex flex-column gap-3">
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-body-secondary price">Price: ${product.price}/-</small>
                </div>
                <button type="button" onclick="chartbtn(this)" class="btn btn-cart"
                    data-name="${product.name}"
                    data-price="${product.price}"
                    data-src="${product.src}"
                    data-description="${product.description}">
                Add to Cart
               </button>
              </div>
            </div> `;
}

function chartbtn(indexOrButton) {
    var product;
    if (typeof indexOrButton === "number") {
        product = allProductsArray[indexOrButton];
    } else if (indexOrButton && indexOrButton.dataset) {
        product = {
            name: indexOrButton.dataset.name,
            price: indexOrButton.dataset.price,
            src: indexOrButton.dataset.src,
            description: indexOrButton.dataset.description
        };
    } else {
        return;
    }
    Swal.fire({
        title: "Confirm Purchase 🛒",
        html: `
            <div class="card h-100 m-2 imgcar">
              <img src="${product.src}" class="card-img-top" alt="${product.name}">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
               </div>
              <div class="card-footer product-card-footer d-flex flex-column gap-3">
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-body-secondary price">Price: ${product.price}/-</small>
                </div>
                <button type="button" onclick="return false;" class="btn btn-cart">
                Add to Cart
               </button>
              </div>
            </div> 
        `,
        showCancelButton: true,
        confirmButtonText: "Yes, Buy Now💖",
        cancelButtonText: "No cancel❌",
        confirmButtonColor: "#c9a515",
        cancelButtonColor: "#030303",
        background: "#100f0f",
        color: "#3d2c1e",

        showClass: {
            popup: "animate__animated animate__zoomIn"
        },
        hideClass: {
            popup: "animate__animated animate__fadeOut"
        }


    }).then(function (result) {

        if (result.isConfirmed) {

            Swal.fire({
                title: "🎉 Added to Cart!",
                html: `
                    <b style="color:#3d2c1e;">${product.name}</b><br>
                    <span style="color:#8b5e3c;">Successfully added</span>
                `,
                icon: "success",
                confirmButtonColor: "#d4af37",
                background: "#f5e6cc",
                color: "#3d2c1e",
                timer: 2000,
                showConfirmButton: false
            });
        }
        else if (result.dismiss === Swal.DismissReason.cancel) {

            Swal.fire({
                title: "😢 Cancelled",
                text: "No problem! You can continue shopping 🛍️",
                icon: "info",
                confirmButtonColor: "#060606",
                background: "#000000",
                color: "#ffffff",
                timer: 2000,
                showConfirmButton: false
            });
        }

    });
}


// Back button ka function
function goBack() {
    document.location.href = "index.html";
}
   
