import { useLocation } from 'wouter';

export function useNavigateTop() {
  const [, setLocation] = useLocation();
  return (path: string) => {
    setLocation(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
}