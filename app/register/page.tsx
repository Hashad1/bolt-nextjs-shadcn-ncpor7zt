"use client";

import { RegisterForm } from "@/components/register/form";
import { RegisterHeader } from "@/components/register/header";
import { RegisterFeatures } from "@/components/register/features";
import { RegisterFooter } from "@/components/register/footer";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4">
        <RegisterHeader />
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <RegisterFeatures />
          <RegisterForm />
        </div>
        <RegisterFooter />
      </div>
    </main>
  );
}