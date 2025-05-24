const sampleListings = [
  {
    title: "Modern Loft in Downtown",
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
    description: "Live the high life with panoramic city views.",
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
    price: 1531,
    location: "Barcelona",
    country: "Spain",
    geometry: {
      type: "Point",
      coordinates: [2.1734, 41.3851]
    }
  },
  {
    title: "Cozy Beachfront Cottage",
    description: "Live the high life with panoramic city views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 1267,
    location: "Cairo",
    country: "Egypt",
    geometry: {
      type: "Point",
      coordinates: [31.2357, 30.0444]
    }
  },
  {
    title: "Modern Loft in Downtown",
    description: "Unwind in nature’s lap, surrounded by trees and tranquility.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501183638714-1c2a4b8f6d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 1737,
    location: "Paris",
    country: "France",
    geometry: {
      type: "Point",
      coordinates: [2.3522, 48.8566]
    }
  },
    {
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
      coordinates: [2.1734, 41.3851]
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
  }
];

module.exports = { data: sampleListings };
