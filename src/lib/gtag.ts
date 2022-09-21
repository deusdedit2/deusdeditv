declare global {
    interface Window {
        gtag:any;
    }
}

export const pageview = (url: string) => {
    window.gtag('config', process.env.NEXT_PUBLIC_GTAG_ID, {
        page_path: url,
    })
}

interface eventsProps {
    action: string;
    category: string | "general",
    label: string;
    value: number;
}

export const event = ({ action, category, label, value }: eventsProps) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    })
}