import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const IconCloudDemo = () => {
  return (
    <div className="relative flex max-w-full items-center justify-center overflow-hidden rounded-lg border bg-background px-40 py-30">
      {/* Increase padding and container size */}
      <IconCloud iconSlugs={slugs} />
    </div>
  );
};

export default IconCloudDemo;
