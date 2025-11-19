import React from "react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./ui/empty";
import { Notebook } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function NLEmpty() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <Notebook />
        </EmptyMedia>
        <EmptyTitle>No notes yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any notes yet. Start by creating your first
          note.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Create note</Button>
      </EmptyContent>
      <Button
        variant="link"
        asChild
        className="text-muted-foreground"
        size="sm"
      >
        <Link href="/learn-more/creating-notes">Learn more</Link>
      </Button>
    </Empty>
  );
}
