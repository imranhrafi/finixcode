import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import InfoTabsContent from "./InfoTabsContent";
import MatchComment from "./MatchComment";
import PlayerList from "./PlayerList";

export default function InfoSection() {
  return (
    <>
      {/* tabs for , info, player, comment */}
      <Tabs defaultValue='info' className='w-full'>
        <TabsList>
          <TabsTrigger value='info'>Info</TabsTrigger>
          <TabsTrigger value='player'>Player</TabsTrigger>
          <TabsTrigger value='comment'>Comment</TabsTrigger>
        </TabsList>
        <TabsContent value='info'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='col-span-2'>
              <InfoTabsContent />
            </div>
          </div>
        </TabsContent>
        <TabsContent value='player'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='col-span-2'>
              <PlayerList />
            </div>
          </div>
        </TabsContent>
        <TabsContent value='comment'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='col-span-2'>
              <MatchComment />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
