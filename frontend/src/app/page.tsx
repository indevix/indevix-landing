import { permanentRedirect, RedirectType } from "next/navigation";

export default function RootPage() {
  permanentRedirect("/en", RedirectType.replace);
}
