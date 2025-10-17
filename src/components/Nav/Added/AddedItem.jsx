import React from 'react'

export default function AddedItem({id,name,deleteFile}) {
  return (
        <div
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '5px 0',
            borderBottom: '1px solid #eee',
        }}
    >
        <p style={{ fontSize: '12px' }}>{name}</p>
        <svg
            className="w-4 h-4 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            style={{ cursor: 'pointer' }}
            onClick={() => deleteFile(id)}
        >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18 17.94 6M18 18 6.06 6"
            />
        </svg>
    </div>
  )
}
