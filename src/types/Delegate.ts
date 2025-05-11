
type Callback = (...args : any[]) => any;

export interface IDelegate<T extends Callback= () => any>
{
	add(callback : T) : void;
	remove(callback : T) : void;
}

export default class Delegate<T extends Callback = () => void> implements IDelegate<T>
{
	// ------------------------------
	//  Data members
	// ------------------------------

	protected	callbacks : Set<T> = new Set<T>();

	// ------------------------------
	//  Constructor(s)
	// ------------------------------

	public constructor()
	{
	}

	// ------------------------------
	//  Methods
	// ------------------------------

	public add(callback : T) : void
	{
		this.callbacks.add(callback);
	}

	public remove(callback : T) : void
	{
		this.callbacks.delete(callback);
	}

	public invoke(...args : any[]) : any
	{
		let result : any;
		this.callbacks.forEach(callback =>
		{
			result = callback(...args);
		});
		return result;
	}

	// ------------------------------
	//  Internal methods
	// ------------------------------

}
