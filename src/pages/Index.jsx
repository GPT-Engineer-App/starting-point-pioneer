import Layout from "@/components/Layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect } from "react"

const Index = () => {
  useEffect(() => {
    throw new Error("This is a test error");
  }, []);

  return (
    <Layout>
      <h2 className="text-xl font-semibold mb-4">Welcome to Your Bare-Bones App</h2>
      <p className="mb-4">This is a simple starting point for your application. Feel free to modify and expand upon it!</p>
      
      <div className="space-y-4">
        <Input placeholder="Enter something..." />
        <Button>Click me!</Button>
      </div>
    </Layout>
  );
};

export default Index;
