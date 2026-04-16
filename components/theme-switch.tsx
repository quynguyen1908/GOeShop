"use client";

import { Switch, Label } from "@heroui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Moon,
  Sun,
} from "@gravity-ui/icons";

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-6"></div>;
  }

  return (
    <Switch
      isSelected={theme === "dark"}
      onChange={(e) => setTheme(theme === "dark" ? "light" : "dark")}
      size="lg"
    >
      <Switch.Control>
        <Switch.Thumb>
          <Switch.Icon>
            {theme === "dark" ? (
              <Moon className="size-3 text-inherit opacity-100" />
            ) : (
              <Sun className="size-3 text-inherit opacity-70" />
            )}
          </Switch.Icon>
        </Switch.Thumb>
      </Switch.Control>
      <Switch.Content>
        <Label className="text-sm">{theme === "dark" ? "Dark" : "Light"} Mode</Label>
       </Switch.Content>
    </Switch>
  );
}
