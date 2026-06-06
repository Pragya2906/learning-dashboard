import Sidebar from '../components/Sidebar'
import BentoGrid from '../components/BentoGrid'
import { createClient } from '../lib/supabase/server'

const user = {
  name: 'Pragya',
  streak: 12,
  coursesActive: 4,
  todayMinutes: 45,
}

export default async function Home() {
  const supabase = await createClient()
  const { data: courses, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: true })

  console.log('COURSES:', courses, 'ERROR:', error)

  return (
    <div className="flex min-h-screen bg-bg-base">
      <Sidebar />
      <BentoGrid user={user} courses={courses ?? []} />
    </div>
  )
}