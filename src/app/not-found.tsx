import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center">
        <Container>
          <div className="text-center py-24">
            <h1 className="font-serif text-h1 mb-4">404</h1>
            <p className="text-body-lg text-foreground/60 mb-8">
              The page you&apos;re looking for doesn&apos;t exist.
            </p>
            <Button href="/">Return Home</Button>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
