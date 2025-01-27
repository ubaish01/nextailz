"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Settings, Grid, Bookmark, List } from "lucide-react";
import Image from "next/image";
import useAuth from "../auth/hooks/use-auth";

export default function InstagramProfile() {
  const [activeTab, setActiveTab] = useState("posts");

  const { user } = useAuth();
  console.log("###", user);

  // This would usually come from a database or API
  const profile = {
    username: user?.email || "johndoe",
    name: user?.name || "John Doe",
    avatar: "/placeholder.svg?height=150&width=150",
    posts: 42,
    followers: 1337,
    following: 420,
    bio: "📸 Photography enthusiast\n🌍 World traveler\n☕ Coffee addict",
  };

  // Placeholder posts data
  const posts = Array(9)
    .fill(null)
    .map((_, i) => ({
      id: i,
      image: `/placeholder.svg?height=300&width=300&text=Post ${i + 1}`,
    }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
        <Avatar className="w-32 h-32 md:w-40 md:h-40 mb-4 md:mb-0 md:mr-8">
          <AvatarImage src={profile.avatar} alt={profile.username} />
          <AvatarFallback>
            {profile.username.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center mb-4">
            <h1 className="text-2xl font-bold mr-4">{profile.username}</h1>
            <div className="mt-2 md:mt-0">
              <Button variant="outline" className="mr-2">
                Edit Profile
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-start space-x-5 mb-4">
            <span>
              <strong>{profile.posts}</strong> posts
            </span>
            <span>
              <strong>{profile.followers}</strong> followers
            </span>
            <span>
              <strong>{profile.following}</strong> following
            </span>
          </div>
          <div>
            <h2 className="font-bold">{profile.name}</h2>
            <p className="whitespace-pre-line">{profile.bio}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-t border-gray-200 mb-4">
        <div className="flex justify-center">
          <Button
            variant="ghost"
            className={`${
              activeTab === "posts" ? "border-t-2 border-black" : ""
            }`}
            onClick={() => setActiveTab("posts")}
          >
            <Grid className="h-4 w-4 mr-2" /> Posts
          </Button>
          <Button
            variant="ghost"
            className={`${
              activeTab === "saved" ? "border-t-2 border-black" : ""
            }`}
            onClick={() => setActiveTab("saved")}
          >
            <Bookmark className="h-4 w-4 mr-2" /> Saved
          </Button>
          <Button
            variant="ghost"
            className={`${
              activeTab === "tagged" ? "border-t-2 border-black" : ""
            }`}
            onClick={() => setActiveTab("tagged")}
          >
            <List className="h-4 w-4 mr-2" /> Tagged
          </Button>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-1 md:gap-4">
        {posts.map((post) => (
          <div key={post.id} className="aspect-square relative">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={`Post ${post.id}`}
              layout="fill"
              objectFit="cover"
              className="rounded-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
