# Employees Management System

This is a modern, modular and easy-to-use employee management system for small and large organizations. The system is built using React, TypeScript, and Firebase, making it fast, secure, and scalable.

Overall, this employees management system provides a solid foundation for managing employee information, with a focus on efficiency, maintainability, and user experience.

---

Live version deployed on Vercel — [Gestion](https://gestion-cms.vercel.app/)

---

## Technology Stack

<p align="center">
<img src='/src/assets/images/readme/techstack.png' width='650'/>
</p>

- [React](https://reactjs.org/) — JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) — statically typed superset of JavaScript
- [RTKQuery](https://redux-toolkit.js.org/) — state management library for React
- [Firebase](https://firebase.google.com/) — platform for building web and mobile apps
- [ESLint](https://eslint.org/) — linting utility for enforcing code style
- [Tailwind](https://tailwindcss.com/) — utility-first CSS framework or writing CSS styles
- [React-Hook-Form](https://react-hook-form.com/) — library for handling forms in React
- [Toastify](https://fkhadra.github.io/react-toastify/introduction) — library for creating and managing notifications in React
- [React-Table](https://react-table-v7.tanstack.com/) — library for rendering tables in React

## Detailed Feature List

This employees management system has been built using React and TypeScript, with the following features:

### State Management

- Utilizes <ins>**Redux Toolkit**</ins> for efficient state management and <ins>**redux-persist**</ins> for persist state to local storage

### Firebase Integration

- Incorporates <ins>**Firebase**</ins> for user authentication and for real-time data storage connected to frontend with <ins>**RTK Query**</ins> injections

### Linting and Formatting

- Follows coding style guide with <ins>**Firebase**</ins> and <ins>**Prettier**</ins>

### Styling

- IMakes use of <ins>**React Hook Form**</ins> for form handling and <ins>**React Toastif**</ins> for notifications

### Firebase Integration

- Styled using <ins>**TailwindCSS**</ins> with <ins>**SCSS modules**</ins>

### Date Formatting

- Manages dates with <ins>**Day.js**</ins>

### Table Management

- Renders tables with <ins>**React Table**</ins> and includes sorting and global search filtering capabilities

### Real-time Chat

- This added feature further improves collaboration and communication within the application, making it an even more powerful tool for managing employee information.

### Additional Utilities

- Includes <code>@aliases</code> for improved code navigation
- Utilizes various <code>utility</code> functions for easier development
- Features <code>Dark Mode</code> support
- Includes an <code>Auth Check</code> for protected pages
- Displays <code>loading indicators</code>loading indicators for data fetching
- Saves <code>user preferences</code>, such as dark mode, to local storage for persistent user experience

<code>Note:</code> You will need to set up Firebase and add your own Firebase configuration details in the .env file.

## Overview

This is an example of React functional component that implements a textarea input field with error handling.

<code>Typescript</code> Interface tailored to React Hook Form errors

```ts
import { TextareaHTMLAttributes } from 'react'
import { IInput } from '../Input/Input.interface'

type TypeTextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & IInput

export interface ITextArea extends TypeTextAreaProps {}
```

It uses the <code>forwardRef</code> utility from React to create a reference to the underlying HTML textarea element, allowing for easy manipulation of its properties and behavior. The component utilizes the <code>classnames</code> package to dynamically generate a classname strings for much cleaner developement and redability.

```tsx
const TextArea: FC<ITextArea> = forwardRef<HTMLTextAreaElement, ITextArea>(
	({ error, className, ...rest }, ref) => {
		return (
			<div className={classnames(styles.textarea, className)}>
				<textarea ref={ref} {...rest} />
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	},
)
```

---

The styles for the components have been implemented using a combination of <code>Tailwind</code> and <code>SCSS modules</code>.

```tsx
const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<main className={styles.main}>
			<Sidebar />
			<section className={styles.wrapper}>{children}</section>
		</main>
	)
}
```

Tailwind provides a set of utility classes for styling, while SCSS modules allow for more fine-tuned control and organization of styles that resilts in much better to read code.

```scss
.main {
	@apply flex flex-col md:flex-row w-full min-h-screen;
}

.wrapper {
	@apply flex flex-wrap md:ml-80 py-8 px-12 w-full bg-slate-200 dark:bg-gest-slate-700 min-h-screen;

	h1 {
		@apply h-1/2 w-1/4;
	}
}
```

---

Application manages downtime with <code>Loader</code> component. It is a simple yet effective way of indicating to the user that the application is currently in the process of loading data.

```tsx
const Notification: FC = () => {
	const { data, isFetching } = useFetchRandomNotificationQuery()
	const [hide, setHide] = useState(false)

	return (
		<>
			{isFetching ? (
				<Loader />
			) : (
				<div className={classnames(styles.container, { hidden: hide })}>
					<h4>{data?.title}</h4>
					<p>{data?.description}</p>
					<RiCloseCircleLine
						className={styles.close}
						onClick={() => setHide(true)}
					/>
				</div>
			)}
		</>
	)
}
```

The loader is a crucial component in providing a good user experience, as it keeps the user informed and helps to prevent confusion or frustration while waiting for data to be fetched.

---

Example of a hook that allows for toggling between light and dark modes. This hook uses <code>Redux Persist</code> to store the user's preference for dark mode, so that it persist between page reloads.

```ts
export const useDarkMode = () => {
	const dispatch = useAppDispatch()
	const { theme } = useAppSelector(
		state => state.persistedReducer.settingsSlice,
	)
	const mode = theme == 'dark' ? 'light' : 'dark'

	useEffect(() => {
		const root = window.document.documentElement
		theme == 'dark' ? root.classList.add('dark') : root.classList.remove('dark')
	})

	return {
		theme,
		toggle: () => dispatch(setTheme({ theme: mode })),
	}
}
```

---

This reusable <code>util function</code> uses the <code>dayjs</code> library to convert a Firebase Firestore Timestamp into a formatted date string. The dayjs library is used for easy and fast manipulation and formatting of dates.

```ts
import { Timestamp } from 'firebase/firestore'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'

export const convertToDate = (date: Timestamp): string =>
	dayjs(date?.toDate()).locale('ru').format('D MMMM YYYY')
```

---

This is a simple yet effective hook for retrieving the current <code>authenticated</code> user's email and id from the Redux store.

```ts
export const useAuth = () => {
	const { email, id } = useAppSelector(
		state => state.persistedReducer.authUserSlice,
	)

	return {
		email,
		id,
		isAuth: !!email,
	}
}
```

The hook returns an object with the email, id, and a boolean isAuth which indicates if the user is authenticated (i.e. the email exists).

```tsx
const Sidebar: FC = () => {
	const { isAuth, id } = useAuth()

	return (
		<aside className={styles.sidebar}>
			<Logo />
			{isAuth ? (
				<Avatar uid={id} size='md' sidebar />
			) : (
				<AuthLinks className='order-3 md:order-2' />
			)}
			<Navigation links={data} />
			<DarkModeToggle />
			<LogoutButton />
		</aside>
	)
}
```

---

## Wrapping Up

In this repository, you will find a set of React components, hooks and utilities that I use frequently in my projects. The components are styled with SCSS module and also use TailwindCSS. The hooks make use of Typed Redux hooks and Redux Persist to store and persist some of the data. The utilities make use of Day.js for date and time manipulation.

I hope you find these helpful and you can use them in your projects. Don't forget to customize them to your specific needs and feel free to ask any questions.

<p align="center">
<img src='/src/assets/images/logo.svg' width='250'/>
</p>
