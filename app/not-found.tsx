import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-28 text-center">
      <p className="text-sm font-semibold text-royal">404</p>
      <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-navy">We couldn&apos;t find that page</h1>
      <p className="mt-3 text-ink/60 max-w-md mx-auto">
        The page you&apos;re looking for may have moved. Try one of the links below, or head back to the homepage.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Back to Home</Button>
        <Button href="/services" variant="secondary">Browse Services</Button>
      </div>
      <p className="mt-6 text-sm">
        <Link href="/contact" className="text-royal hover:underline">Or get in touch with our team →</Link>
      </p>
    </Container>
  );
}
