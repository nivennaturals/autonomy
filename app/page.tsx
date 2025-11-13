import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Package, ScrollText, Trees } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-amber-50">
        <header className="bg-green-900 text-amber-50 py-16">
          <div className="max-w-6xl mx-auto text-center px-6">
            <h1 className="text-5xl font-bold mb-4">Homestead Pantry</h1>
            <p className="text-xl">The open-source recipe vault for homesteaders</p>
          </div>
        </header>

        <main className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Package className="w-16 h-16 mx-auto mb-4 text-green-800" />
            <h2 className="text-2xl font-bold mb-3">Preserve the Harvest</h2>
            <p>Water-bath, pressure canning, fermenting, dehydrating — all tested safe</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <ScrollText className="w-16 h-16 mx-auto mb-4 text-amber-700" />
            <h2 className="text-2xl font-bold mb-3">Grandma's Recipes</h2>
            <p>Fork, improve, and pass down like open-source code</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Trees className="w-16 h-16 mx-auto mb-4 text-green-700" />
            <h2 className="text-2xl font-bold mb-3">Self-Reliant & Free</h2>
            <p>No ads. No tracking. Yours forever.</p>
          </div>
        </main>

        <div className="text-center py-12">
          <Button asChild size="lg" className="bg-green-800 hover:bg-green-900">
            <Link href="/recipes">Browse Recipes →</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
