import React from "react";
import { storiesOf } from "@storybook/react";
import Form from "./Form";
import Input from "./Input";
import Button from "../button/Button";
import SelectList from "./SelectList";
import MultiSelectList from "./MultiSelectList";
import Label from "./Label";

storiesOf("Form", module).add("form", () => (
  <Form>
    <Input />
    <SelectList items={["a", "b"]} />
    <Label>aaaaaaaaa</Label>
    <MultiSelectList items={["a", "b"]} />
    <Button>送信する</Button>
  </Form>
));
