const sampleListings =  [{
    title: "Sunny Apartment in Barcelona",
    description: "Perfect for nature lovers looking for a peaceful getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 2592,
    location: "Barcelona",
    country: "Spain",
    geometry: {
      type: "Point",
      coordinates: [
        2.1734,
        41.3851
      ]
    }
  },
  {
  title: "Secluded Treehouse Getaway",
  description: "A perfect hideaway for weekends and vacations.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  price: 2694,
  location: "Barcelona",
  country: "Spain",
  geometry: {
    type: "Point",
    coordinates: [2.1734, 41.3851]
  }
},
{
  title: "Cozy Beachfront Cottage",
  description: "Step out to the beach in seconds from this cozy home.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
  },
  price: 2096,
  location: "Bali",
  country: "Indonesia",
  geometry: {
    type: "Point",
    coordinates: [115.1889, -8.4095]
  }
},
  {
    title: "Cozy Beachfront Cottage",
    description: "Enjoy traditional charm with modern comforts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 1229,
    location: "Aspen",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-106.8175, 39.1911]
    }
  },
  {
    title: "Sunny Apartment in Barcelona",
    description: "Experience heritage and elegance in this grand old villa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 2028,
    location: "Barcelona",
    country: "Spain",
    geometry: {
      type: "Point",
      coordinates: [2.1734, 41.3851]
    }
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Enjoy traditional charm with modern comforts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 664,
    location: "Aspen",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-106.8175, 39.1911]
    }
  },
  {
    title: "Charming Countryside Farmhouse",
    description: "Unwind in nature’s lap, surrounded by trees and tranquility.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 2359,
    location: "Tokyo",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [139.6917, 35.6895]
    }
  },
  {
    title: "Cozy Beachfront Cottage",
    description: "A perfect hideaway for weekends and vacations.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 2169,
    location: "New York City",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-74.006, 40.7128]
    }
  },
  {
    title: "Rustic Cabin by the Lake",
    description: "A bright and airy space, close to local attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 2279,
    location: "Malibu",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Luxury Penthouse Suite",
    description: "Escape to this relaxing space with stunning views and fresh air.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 788,
    location: "Cairo",
    country: "Egypt",
    geometry: {
      type: "Point",
      coordinates: [31.2357, 30.0444]
    }
  },
   {
    title: "Historic Villa in Tuscany",
    description: "Step out to the beach in seconds from this cozy home.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1575,
    location: "Bali",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.1889, -8.4095]
    }
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Escape to this relaxing space with stunning views and fresh air.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 2983,
    location: "Cairo",
    country: "Egypt",
    geometry: {
      type: "Point",
      coordinates: [31.2357, 30.0444]
    }
  },
  {
    title: "Forest Retreat in Tuscany",
    description: "Unwind in nature’s lap, surrounded by trees and tranquility.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 2102,
    location: "Florence",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7696]
    }
  },
  {
    title: "Sunny Apartment in Barcelona",
    description: "A perfect hideaway for weekends and vacations.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 1200,
    location: "Portland",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-122.675, 45.5051]
    }
  },
  {
    title: "Treehouse Overlook in Cairo",
    description: "A perfect hideaway for weekends and vacations.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 998,
    location: "Cairo",
    country: "Egypt",
    geometry: {
      type: "Point",
      coordinates: [31.2357, 30.0444]
    }
  },
   {
    title: "Rustic Cabin by the Lake",
    description: "Enjoy traditional charm with modern comforts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 1600,
    location: "Portland",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-122.675, 45.5051]
    }
  },
  {
    title: "Rustic Cabin by the Lake",
    description: "Perfect for nature lovers looking for a peaceful getaway.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 2553,
    location: "Aspen",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-106.8175, 39.1911]
    }
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Stay in style and comfort at the center of everything.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 1849,
    location: "Tokyo",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [139.6917, 35.6895]
    }
  },
  {
    title: "Sunny Apartment in Barcelona",
    description: "Live the high life with panoramic city views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 2789,
    location: "Malibu",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Mountain Retreat",
    description: "Perfect for nature lovers looking for a peaceful getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 2852,
    location: "Aspen",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-106.8175, 39.1911]
    }
  },
  {
    title: "Sunny Apartment in Barcelona",
    description: "Step out to the beach in seconds from this cozy home.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 776,
    location: "Paris",
    country: "France",
    geometry: {
      type: "Point",
      coordinates: [2.3522, 48.8566]
    }
  },
   {
    title: "Sunny Apartment in Bali",
    description: "Unwind in nature’s lap, surrounded by trees and tranquility.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 2563,
    location: "Bali",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.1889, -8.4095]
    }
  },
  {
    title: "Rustic Cabin by the Lake in Paris",
    description: "Perfect for nature lovers looking for a peaceful getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 2795,
    location: "Paris",
    country: "France",
    geometry: {
      type: "Point",
      coordinates: [2.3522, 48.8566]
    }
  },
  {
    title: "Charming Countryside Farmhouse",
    description: "Escape to this relaxing space with stunning views and fresh air.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 2521,
    location: "Florence",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7696]
    }
  },
  {
    title: "Sunny Apartment in Barcelona",
    description: "Live the high life with panoramic city views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 1287,
    location: "Barcelona",
    country: "Spain",
    geometry: {
      type: "Point",
      coordinates: [2.1734, 41.3851]
    }
  },
  {
    title: "Modern Loft in Downtown NYC",
    description: "Stay in style and comfort at the center of everything.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1658,
    location: "New York City",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-74.006, 40.7128]
    }
  },
  {
    title: "Beachfront Bungalow in Bali",
    description: "Wake up to ocean views and a gentle sea breeze.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 2938,
    location: "Bali",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.1889, -8.4095]
    }
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Escape to this relaxing space with stunning views and fresh air.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 944,
    location: "Malibu",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Mountain Retreat",
    description: "Experience heritage and elegance in this grand old villa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1572,
    location: "Barcelona",
    country: "Spain",
    geometry: {
      type: "Point",
      coordinates: [2.1734, 41.3851]
    }
  },
  {
    title: "Charming Countryside Farmhouse",
    description: "Stay in style and comfort at the center of everything.",
    image: {
      filename: "listingimage",
      url: "https://source.unsplash.com/featured/?house"
    },
    price: 850,
    location: "Tokyo",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [139.6917, 35.6895]
    }
  },
  {
    title: "Cozy Beachfront Cottage",
    description: "Stay in style and comfort at the center of everything.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 1057,
    location: "Florence",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7696]
    }
  },
  {
    title: "Beachfront Bungalow in Bali",
    description: "Experience heritage and elegance in this grand old villa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 574,
    location: "Malibu",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Modern Loft in Downtown",
    description: "Step out to the beach in seconds from this cozy home.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 1599,
    location: "Tokyo",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [139.6917, 35.6895]
    }
  },
  {
    title: "Rustic Cabin by the Lake",
    description: "Experience heritage and elegance in this grand old villa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 741,
    location: "Portland",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-122.675, 45.5051]
    }
  },
  {
    title: "Sunny Apartment in Barcelona",
    description: "A bright and airy space, close to local attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 2429,
    location: "Florence",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7696]
    }
  },
  {
    title: "Luxury Penthouse Suite",
    description: "Unwind in nature’s lap, surrounded by trees and tranquility.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 2413,
    location: "New York City",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-74.006, 40.7128]
    }
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Perfect for nature lovers looking for a peaceful getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 1797,
    location: "Portland",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-122.675, 45.5051]
    }
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Experience heritage and elegance in this grand old villa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 1332,
    location: "Bali",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.1889, -8.4095]
    }
  },
  {
    title: "Charming Countryside Farmhouse",
    description: "Step out to the beach in seconds from this cozy home.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 2644,
    location: "New York City",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-74.006, 40.7128]
    }
  },
   {
    title: "Sunny Apartment in Barcelona",
    description: "A bright and airy space, close to local attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 2721,
    location: "Tokyo",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [139.6917, 35.6895]
    }
  },
  {
    title: "Modern Loft in Downtown",
    description: "Unwind in nature’s lap, surrounded by trees and tranquility.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 731,
    location: "Bali",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.1889, -8.4095]
    }
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Perfect for nature lovers looking for a peaceful getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 2275,
    location: "Cairo",
    country: "Egypt",
    geometry: {
      type: "Point",
      coordinates: [31.2357, 30.0444]
    }
  },
  {
    title: "Rustic Cabin by the Lake",
    description: "Stay in style and comfort at the center of everything.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1486308510493-cb6f0d2076c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 1040,
    location: "Bali",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.1889, -8.4095]
    }
  },
  {
    title: "Luxury Penthouse Suite",
    description: "Perfect for nature lovers looking for a peaceful getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 1730,
    location: "New York City",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-74.006, 40.7128]
    }
  },
  {
    title: "Historic Villa in Tuscany",
    description: "A bright and airy space, close to local attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 605,
    location: "Paris",
    country: "France",
    geometry: {
      type: "Point",
      coordinates: [2.3522, 48.8566]
    }
  },
  {
    title: "Modern Loft in Downtown",
    description: "Perfect for nature lovers looking for a peaceful getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521310192545-0f7abf290735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 2591,
    location: "Tokyo",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [139.6917, 35.6895]
    }
  },
  {
    title: "Luxury Penthouse Suite",
    description: "Stay in style and comfort at the center of everything.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 715,
    location: "Tokyo",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [139.6917, 35.6895]
    }
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Stay in style and comfort at the center of everything.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 626,
    location: "Aspen",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-106.8175, 39.1911]
    }
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Live the high life with panoramic city views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 2681,
    location: "Cairo",
    country: "Egypt",
    geometry: {
      type: "Point",
      coordinates: [31.2357, 30.0444]
    }
  },
  {
    title: "Sunny Apartment in Barcelona",
    description: "Enjoy traditional charm with modern comforts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 939,
    location: "Cairo",
    country: "Egypt",
    geometry: {
      type: "Point",
      coordinates: [31.2357, 30.0444]
    }
  },
  {
    title: "Modern Loft in Downtown",
    description: "Perfect for nature lovers looking for a peaceful getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521310192545-0f7abf290735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 2591,
    location: "Tokyo",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [139.6917, 35.6895]
    }
  },
  {
    title: "Luxury Penthouse Suite",
    description: "Stay in style and comfort at the center of everything.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 715,
    location: "Tokyo",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [139.6917, 35.6895]
    }
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Stay in style and comfort at the center of everything.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 626,
    location: "Aspen",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-106.8175, 39.1911]
    }
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Live the high life with panoramic city views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 2681,
    location: "Cairo",
    country: "Egypt",
    geometry: {
      type: "Point",
      coordinates: [31.2357, 30.0444]
    }
  },
  {
    title: "Sunny Apartment in Barcelona",
    description: "Enjoy traditional charm with modern comforts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 939,
    location: "Cairo",
    country: "Egypt",
    geometry: {
      type: "Point",
      coordinates: [31.2357, 30.0444]
    }
  }
]

module.exports = { data: sampleListings };
