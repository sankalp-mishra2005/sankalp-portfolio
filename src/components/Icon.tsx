import { useEffect, useState, type ReactElement } from 'react'
import type { IconType } from 'react-icons'

const loadIcons = (name: string) => {
  const iconLib = name.substring(0, 2).toLowerCase()

  switch (iconLib) {
    case 'fi':
      return import('react-icons/fi')

    case 'ri':
      return import('react-icons/ri')

    case 'tb':
      return import('react-icons/tb')

    case 'si':
      return import('react-icons/si')

    default:
      return null
  }
}

const Icon = ({
  iconName,
  size,
  className
}: {
  iconName: string
  size?: number
  className?: string
}) => {
  const [importedComp, setImportedComp] = useState<ReactElement | null>(null)
  useEffect(() => {
    if (iconName.toLowerCase() === 'sileetcode') {
      setImportedComp(
        <svg viewBox="0 0 24 24" width={size || 18} height={size || 18} className={className} fill="currentColor">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193a3.137 3.137 0 0 1-.062-4.329L11.832 8.01a1.383 1.383 0 0 0-.007-1.954 1.378 1.378 0 0 0-1.951-.007L4.57 11.239a5.86 5.86 0 0 0-.062 8.033l.019.018 4.277 4.193c2.912 2.857 7.502 2.78 10.312-.11l2.455-2.455a5.88 5.88 0 0 0 1.725-4.17 5.887 5.887 0 0 0-1.725-4.17l-4.576-4.575a1.378 1.378 0 0 0-1.95 1.95l4.576 4.574c1.197 1.197 1.197 3.143 0 4.34l-2.455 2.455c-1.222 1.222-3.21 1.222-4.422 0l-.019-.019-4.277-4.193a1.378 1.378 0 0 1 .018-1.947l5.303-5.32c.54-.54.54-1.414-.003-1.955a1.377 1.377 0 0 0-1.952-.003z" />
        </svg>
      )
      return
    }

    const importComponent = async () => {
      const module = await loadIcons(iconName)
      if (!module) {
        return
      }
      const AnotherComponent = module[
        `${iconName}` as keyof typeof module
      ] as unknown as IconType
      setImportedComp(
        <AnotherComponent size={size || 18} className={className} />
      )
    }

    importComponent()
  }, [])
  return <div>{importedComp}</div>
}

export default Icon
