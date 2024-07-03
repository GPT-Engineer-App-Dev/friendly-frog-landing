import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="space-y-10">
      {/* Header Section */}
      <header className="text-center py-10 bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg')" }}>
        <h1 className="text-5xl font-bold">Welcome to the World of Frogs</h1>
        <p className="text-xl mt-4">Discover the fascinating life of frogs</p>
      </header>

      {/* About Section */}
      <section className="text-center py-10">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">About Frogs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              Frogs are amphibians known for their jumping abilities, croaking sounds, bulging eyes, and slimy skin. They live in a variety of environments, from tropical forests to frozen tundras. Frogs play a crucial role in the ecosystem by controlling insect populations and serving as food for many predators.
            </p>
            <img src="/placeholder.svg" alt="Frog" className="mx-auto mt-4" />
          </CardContent>
        </Card>
      </section>

      {/* Types of Frogs Section */}
      <section className="text-center py-10">
        <h2 className="text-3xl font-bold mb-6">Types of Frogs</h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Card className="mx-2">
                <CardHeader>
                  <CardTitle>Tree Frog</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src="/placeholder.svg" alt="Tree Frog" className="mx-auto" />
                  <p className="mt-2">Tree frogs are known for their climbing abilities and are often found in trees and shrubs.</p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="mx-2">
                <CardHeader>
                  <CardTitle>Poison Dart Frog</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src="/placeholder.svg" alt="Poison Dart Frog" className="mx-auto" />
                  <p className="mt-2">Poison dart frogs are known for their bright colors and toxic skin, which deters predators.</p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="mx-2">
                <CardHeader>
                  <CardTitle>Bullfrog</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src="/placeholder.svg" alt="Bullfrog" className="mx-auto" />
                  <p className="mt-2">Bullfrogs are large frogs known for their loud calls and are commonly found in ponds and lakes.</p>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      {/* Fun Facts Section */}
      <section className="text-center py-10">
        <h2 className="text-3xl font-bold mb-6">Fun Facts About Frogs</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="Fact Icon" />
              <AvatarFallback>F1</AvatarFallback>
            </Avatar>
            <p>Frogs absorb water through their skin, so they don't need to drink.</p>
          </div>
          <Separator />
          <div className="flex items-center justify-center space-x-2">
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="Fact Icon" />
              <AvatarFallback>F2</AvatarFallback>
            </Avatar>
            <p>There are over 6,000 species of frogs around the world.</p>
          </div>
          <Separator />
          <div className="flex items-center justify-center space-x-2">
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="Fact Icon" />
              <AvatarFallback>F3</AvatarFallback>
            </Avatar>
            <p>Frogs can lay up to 4,000 eggs at one time.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center py-10 bg-gray-800 text-white">
        <p>Follow us on social media:</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Badge variant="outline">Facebook</Badge>
          <Badge variant="outline">Twitter</Badge>
          <Badge variant="outline">Instagram</Badge>
        </div>
        <p className="mt-4">Contact us at: info@frogsworld.com</p>
        <p className="mt-2">© 2023 Frogs World. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;