import { Badge } from '@myorg/components/ui/badge';

export function Welcome({ title }: { title: string }) {
  return (
    <div className="container relative pb-10">
      <section className="hidden md:block">
        <div className="overflow-hidden rounded-lg border bg-background shadow-xl">
          <Badge variant="secondary">Click Me</Badge>
        </div>
      </section>
    </div>
  );
}

export default Welcome;
