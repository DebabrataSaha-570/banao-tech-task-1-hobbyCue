import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignIn from "../Authentication/SignIn";
import JoinIn from "../Authentication/JoinIn";

const HeroRightPart = () => {
  return (
    <div className="">
      <Tabs defaultValue="Sign In" className="text-center md:text-left">
        <TabsList className="">
          <TabsTrigger value="Sign In">Sign In</TabsTrigger>
          <TabsTrigger value="Join In">Join In</TabsTrigger>
        </TabsList>
        <TabsContent value="Sign In">
          <SignIn></SignIn>
        </TabsContent>
        <TabsContent value="Join In">
          <JoinIn></JoinIn>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HeroRightPart;
