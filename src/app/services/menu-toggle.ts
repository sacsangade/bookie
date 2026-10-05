import { Service, signal } from '@angular/core';

@Service()
export class MenuToggle {
    // Define a writable signal for menu visibility
    readonly isOpen = signal<boolean>(false);

    // Toggle state method
    toggle(): void {
        this.isOpen.update(value => !value);
    }

    // Explicitly set state
    setOpen(state: boolean): void {
        this.isOpen.set(state);
    }
}
