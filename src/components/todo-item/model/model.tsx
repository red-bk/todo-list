
export interface TodoItemProps {
    todo: TodoItem
    done?: boolean
    onComplete?: (id:number) => void 
    onRemove?: (id:number) => void
    onEdit?: (id:number) => void
}


export interface TodoItem {
    id: number
    task: string
    done:boolean
}

export interface CallOrConstruct {
    onComplete?: (id:number) => void   | unknown
}



