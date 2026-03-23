import { HomePageClient } from '@/components/HomePageClient';
import { getServerConfig } from '@/lib/server-config';

export default function HomePage() {
  const serverConfig = getServerConfig();

  return <HomePageClient serverConfig={serverConfig} />;
}
