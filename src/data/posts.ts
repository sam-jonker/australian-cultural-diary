export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    id: "welcome-to-australia",
    title: "Welcome to Australia: First Impressions",
    date: "2025-11-10",
    excerpt: "My first week in Australia has been filled with surprises, from the friendly locals to the unique wildlife.",
    content: `# Welcome to Australia: First Impressions

My first week in Australia has been filled with surprises and new experiences. Coming from a different culture, I've noticed so many interesting differences in daily life here.

## The People

Australians are incredibly friendly and laid-back. The concept of "no worries" isn't just a saying - it's genuinely part of the culture. People seem to take life at a more relaxed pace, which is refreshing.

## Coffee Culture

I was surprised to learn that Australia has a serious coffee culture. They take their flat whites and long blacks very seriously! The cafe scene here is vibrant and social.

## Wildlife Encounters

Even in the city, you can spot cockatoos, kookaburras, and possums. It's amazing how wildlife is integrated into urban life here.

## Language Quirks

- "Arvo" means afternoon
- "Servo" is a gas station
- "Brekky" is breakfast
- Everything gets shortened!

I'm excited to continue documenting my cultural observations throughout this journey.`
  },
  {
    id: "aboriginal-art-experience",
    title: "Discovering Aboriginal Art and Culture",
    date: "2025-11-08",
    excerpt: "A visit to a local Aboriginal art gallery opened my eyes to the deep cultural heritage of Australia's First Nations people.",
    content: `# Discovering Aboriginal Art and Culture

Today I visited a local Aboriginal art gallery, and it was a profound experience that taught me about the world's oldest continuous culture.

## The Dreamtime

Aboriginal art tells stories of the Dreamtime - the creation period when ancestral spirits shaped the land, animals, and laws. Each painting is not just art, but a story passed down through thousands of years.

## Dot Painting

The intricate dot painting technique is mesmerizing. What appears abstract at first reveals detailed stories about land, animals, and spiritual connections when you learn to read the symbols.

## Respect and Recognition

I learned about the importance of:
- Acknowledging the Traditional Owners of the land
- Understanding that Aboriginal culture is not a single culture, but hundreds of distinct nations
- The ongoing journey of reconciliation in Australia

## Cultural Protocols

There's a respectful way to engage with Aboriginal art and culture:
- Always ask permission before taking photos
- Purchase art from authentic Aboriginal artists
- Learn about the specific nation whose land you're on

This experience has given me a deeper appreciation for the cultural richness of Australia and the importance of respecting and preserving Indigenous knowledge.`
  }
];
