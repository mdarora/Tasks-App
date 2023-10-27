import TaskProvider from '@/providers/TaskProvider'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'

export default function Home() {
  return (
    <main className='max-w-4xl mx-auto mt-4 px-2'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Tasks App</h1>
        <TaskProvider>
          <AddTask/>
          <TaskList/>
        </TaskProvider>
      </div>
    </main>
  )
}
