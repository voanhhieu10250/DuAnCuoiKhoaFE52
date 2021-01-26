export default function SetPathNameToLocal() {
  const pathname = localStorage.getItem("location");
  if (!pathname || pathname !== window.location.pathname)
    localStorage.setItem("location", window.location.pathname);
}
