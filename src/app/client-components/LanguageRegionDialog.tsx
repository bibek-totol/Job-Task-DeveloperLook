"use client"

import * as React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "@/components/ui/card"

export default function LanguageRegionDialog({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (open: boolean) => void
}) {
  const [translateEnabled, setTranslateEnabled] = React.useState(true)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Language and region</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="language" className="w-full">
          <TabsList className="w-full flex">
            <TabsTrigger value="language" className="flex-1">Language and region</TabsTrigger>
            <TabsTrigger value="currency" className="flex-1">Currency</TabsTrigger>
          </TabsList>

    
          <TabsContent value="language" className="mt-4">
            
            <div className="flex items-center justify-between rounded-lg border p-3 mb-4">
              <div className="space-y-1">
                <p className="text-sm font-medium">Translation</p>
                <p className="text-sm text-muted-foreground">
                  Automatically translate descriptions and reviews to English.
                </p>
              </div>
              <Switch checked={translateEnabled} onCheckedChange={setTranslateEnabled} />
            </div>

    
            <ScrollArea className="h-72 rounded-md border p-4">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { lang: "English", region: "United States" },
                  { lang: "Bangla", region: "Bangladesh" }
                ].map((item, idx) => (
                  <Card
                    key={idx}
                    className="cursor-pointer p-3 hover:border-primary transition rounded-lg"
                  >
                    <p className="text-sm font-medium">{item.lang}</p>
                    <p className="text-xs text-muted-foreground">{item.region}</p>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          
          <TabsContent value="currency" className="mt-4">
            <p className="text-sm text-muted-foreground">Currency selection will go here.</p>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
